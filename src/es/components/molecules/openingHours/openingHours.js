import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class OpeningHours extends Shadow() {
    constructor(options = {}, ...args) {
        super({ importMetaUrl: import.meta.url, tabindex: 'no-tabindex', ...options }, ...args)

        this.Data = {
            openingHours: {},
            specialOpeningHours: {},
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        };

        try {
            const jsonConfig = this.template.content.querySelector('script[type="application/json"]');
            if (jsonConfig) {
                this.Data = JSON.parse(jsonConfig.textContent);
            }
        } catch (error) {
            console.warn('Fehler beim Parsen der Daten', error);
        }
    }

    connectedCallback() {
        if (this.shouldRenderCSS()) this.renderCSS();
        this.renderHTML();

        this.updateOpeningHours();
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
        const contentLink = this.root.getElementById('content-link');
        const linkContainer = this.root.getElementById('oeffnungszeiten-link');

        if (!contentLink || !linkContainer) return;

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

            if (!dayData || !dayData.open || !dayData.close) continue;

            const openMinutes = this.timeToMinutes(dayData.open);
            const closeMinutes = this.timeToMinutes(dayData.close);

            if (i === 0) {
                if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
                    const minutesLeft = closeMinutes - currentMinutes;
                    const isClosingSoon = minutesLeft <= 60;
                    statusText = isClosingSoon ? "Schliesst" : "Geöffnet";
                    statusColor = isClosingSoon ? "var(--m-yellow-800)" : "var(--m-green-800)";
                    scheduleInfo = isClosingSoon ? `in ${minutesLeft} Min.` : `bis ${dayData.close} Uhr`;
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
        const templateNode = this.template.content.querySelector('.openingHoursContainer');
        if (templateNode) {
            const clone = templateNode.cloneNode(true);

            clone.querySelector('.status-text').textContent = statusText;
            clone.querySelector('.schedule-info').textContent = scheduleInfo;
            clone.querySelector('path').setAttribute('stroke', statusColor);

            linkContainer.style.color = statusColor;
            contentLink.innerHTML = '';
            contentLink.appendChild(clone);
        }
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
            font-family: sans-serif;
         } 
         .openingHoursContainer { 
            display: flex;
            align-items: center; 
            gap: 5px;
         } 
         #oeffnungszeiten-link { 
            text-decoration: none;
         } 
         .status { 
            display: flex; 
            flex-direction: column; 
            font-weight: bold;
         }
    `
    }

    get template() {
        return this.root.querySelector('template') || this.querySelector('template');
    }
}