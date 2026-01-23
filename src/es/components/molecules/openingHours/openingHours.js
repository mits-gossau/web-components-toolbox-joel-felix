import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class OpeningHours extends Shadow() {
    constructor(options = {}, ...args) {
        super({ importMetaUrl: import.meta.url, tabindex: 'no-tabindex', ...options }, ...args)

        try {
            this.Data = JSON.parse(this.template.content.textContent);
        } catch (error) {
            console.warn('Fehler beim Parsen der Daten', error);
            this.Data = {
                openingHours: {},
                specialOpeningHours: {},
                dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
            };
        }
    }

    connectedCallback() {
        this.hidden = false;
        const showPromises = [];
        if (this.shouldRenderCSS()) this.renderCSS()
        this.renderHTML();

        Promise.all(showPromises).then(() => {
            this.hidden = false;
            this.updateOpeningHours();
        })

        this.interval = setInterval(() => this.updateOpeningHours(), 20000);
    }

    renderHTML() {
        this.html = /* HTML */ `
            <a href="#" id="oeffnungszeiten-link">
                <span id="content-link"></span>
            </a>
        `;
    }

    timeToMinutes(timeString) {
        if (!timeString) return null;
        const [hour, minute] = timeString.split(':').map(Number);
        return hour * 60 + minute;
    };

    updateOpeningHours() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const textElement = this.root.getElementById('content-link');
        const container = this.root.getElementById('oeffnungszeiten-link');

        if (!textElement || !container) return;

        let statusText = "Geschlossen";
        let statusColor = "var(--m-red-800)";
        let scheduleInfo = "";

        for (let i = 0; i < 7; i++) {
            const date = new Date(now);
            date.setDate(now.getDate() + i);
            const isoDate = date.toISOString().split('T')[0];
            const dayName = this.Data.dayNames[date.getDay()];
            const dayData = (this.Data.specialOpeningHours && this.Data.specialOpeningHours[isoDate])
                ? this.Data.specialOpeningHours[isoDate]
                : (this.Data.openingHours ? this.Data.openingHours[dayName] : null);
            if (!dayData || !dayData.open || !dayData.close) {
                if (i === 0) continue;
                else continue;
            }

            const openMinutes = this.timeToMinutes(dayData.open);
            const closeMinutes = this.timeToMinutes(dayData.close);

            if (i === 0) {
                if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
                    const minutesLeft = closeMinutes - currentMinutes;
                    const ClosingSoon = minutesLeft <= 60;
                    statusText = ClosingSoon ? "Schliesst" : "Geöffnet";
                    statusColor = ClosingSoon ? "var(--m-yellow-800)" : "var(--m-green-800)";
                    scheduleInfo = ClosingSoon ? `in ${minutesLeft} Min.` : `bis ${dayData.close} Uhr`;
                    break;
                } else if (currentMinutes < openMinutes) {
                    statusText = "Geschlossen";
                    statusColor = "var(--m-red-800)";
                    scheduleInfo = `öffnet um ${dayData.open} Uhr`;
                    break;
                }
            } else {
                statusText = "Geschlossen";
                statusColor = "var(--m-red-800)";
                scheduleInfo = `öffnet ${i === 1 ? 'morgen' : dayName} um ${dayData.open} Uhr`;
                break;
            }
        }

        container.style.color = statusColor;
        const template = this.querySelector('template').content.cloneNode(true);
        template.querySelector('.status-text').textContent = statusText;
        template.querySelector('.schedule-info').textContent = scheduleInfo;
        template.querySelector('path').setAttribute('stroke', statusColor);

        this.querySelector('#content-link').appendChild(template);

    }

    disconnectedCallback() {
        if (this.interval) clearInterval(this.interval);
    }

    shouldRenderCSS() {
        return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
    }

    renderCSS() {
        this.css = /* CSS */`
        :host {
            font-family: var(--opening-hours-font-family);
        }
        
        .openingHoursContainer {
            display: flex;
            align-items: center;
            gap: var(--opening-hours-gap); 
        }

         #oeffnungszeiten-link {
            text-decoration: none;    
        }

        .status {
            display: flex;
            flex-direction: column;
            font-weight: var(--opening-hours-status-font-weight);
        }
        `
        return this.fetchTemplate()
    }

    fetchTemplate() {
        const styles = [
            {
                path: `${this.importMetaUrl}../../web-components-toolbox/src/css/reset.css`,
                namespace: false
            },
            {
                path: `${this.importMetaUrl}../../web-components-toolbox/src/css/style.css`,
                namespaceFallback: false
            }
        ]
        return this.fetchCSS([{
            path: `${this.importMetaUrl}./default-/default-.css`,
            namespace: false
        }, ...styles])
    }

    get template() {
        return this.root.querySelector('template') || this.querySelector('template');
    }
}