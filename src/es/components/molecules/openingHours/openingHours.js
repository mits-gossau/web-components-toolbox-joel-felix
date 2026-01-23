import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class OpeningHours extends Shadow() {
    constructor(options = {}, ...args) {
        super({ importMetaUrl: import.meta.url, tabindex: 'no-tabindex', ...options }, ...args)

        this.Data = {
            openingHours: {},
            specialOpeningHours: {},
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        };
    }

    connectedCallback() {
        if (this.shouldRenderCSS()) this.renderCSS()

        const config = this.getAttribute('data-config');
        if (config) {
            try {
                this.Data = JSON.parse(config);
                console.log("Daten geladen:", this.Data)
            } catch (error) {
                console.log("JSON Parse Fehler", error)
                console.error("Fehler beim Prsen des data-config Attributes", error);
            }
        }

        this.updateOpeningHours();
        this.interval = setInterval(() => this.updateOpeningHours(), 20000);
    }

    timeToMinutes(timeString) {
        if (!timeString) return null;
        const [hour, minute] = timeString.split(':').map(Number);
        return hour * 60 + minute;
    };

    updateOpeningHours() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        let container = this.root.getElementById('oeffnungszeiten-link');

        if (!container) {
            const lightDomLink = this.querySelector('#oeffnungszeiten-link');
            if (lightDomLink) {
                this.html = lightDomLink;
                container = this.root.getElementById('oeffnungszeiten-link');
            }
        }

        const textElement = this.root.getElementById('content-link');

        if (!container || !textElement) return;

        let statusText = "";
        let statusColor = "var(--m-red-800)";
        let scheduleInfo = "";

        for (let i = 0; i < 7; i++) {
            const date = new Date(now);
            date.setDate(now.getDate() + i);
            const isoDate = date.toISOString().split('T')[0];
            const dayName = this.Data.dayNames[date.getDay()];
            const dayData = this.Data.specialOpeningHours[isoDate] !== undefined
                ? this.Data.specialOpeningHours[isoDate]
                : this.Data.openingHours[dayName];

            if (!dayData || !dayData.open) continue;

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
                    scheduleInfo = `öffnet um ${dayData.open} Uhr`;
                    break;
                }
            } else {
                statusText = "Geschlossen";
                scheduleInfo = `öffnet ${dayName} um ${dayData.open} Uhr`;
                break;
            }
        }

        container.style.color = statusColor;
        textElement.innerHTML = /* HTML */ `
                <div class="openingHoursContainer">           
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 32 32" stroke-linejoin="round" stroke-linecap="round">
                        <path stroke="${statusColor}" stroke-width="2.3" d="M16 8v8l5.333 2.667m8-2.667c0 7.364-5.97 13.333-13.333 13.333S2.667 23.363 2.667 16 8.637 2.667 16 2.667 29.333 8.637 29.333 16"></path>
                    </svg>
                    <div class="status">
                        <span class="status-text" style="font-weight:bold">${statusText}</span>
                        <span class="schedule-info">${scheduleInfo}</span>
                    </div>
                </div>
        `;
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
        display: block; 
        font-family: sans-serif;
    }
    .openingHoursContainer {
        display: flex;
        align-items: center;
        gap: 10px; 
    }
    #oeffnungszeiten-link {
        text-decoration: none;
        display: block;
    }
    .status {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
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
}