// @ts-check
import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

/**
 * @export
 * @class openingHours
 * @type {CustomElementConstructor}
 */

export default class OpeningHours extends Shadow() {
    /**
     * 
     * @param {*} options 
     * @param  {...any} args 
     */
    constructor(options = {}, ...args) {
        super({ importMetaUrl: import.meta.url, tabindex: 'no-tabindex', ...options }, ...args)

        this.Data = {
            openingHours: {
                "Montag": { open: "09:00", close: "17:00" },
                "Dienstag": { open: "09:00", close: "16:00" },
                "Mittwoch": { open: "09:00", close: "17:00" },
                "Donnerstag": { open: "09:00", close: "17:00" },
                "Freitag": { open: "09:00", close: "17:00" },
                "Samstag": { open: "09:00", close: "16:00" },
                "Sonntag": { open: null, close: null }
            },
            specialOpeningHours: {
                "2026-12-25": { open: null, close: null },
                "2026-12-26": { open: null, close: null },
                "2027-01-01": { open: null, close: null }
            },
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        };

        try {
            const template = this.querySelector('template');
            if (template) {
                const config = JSON.parse(template.innerHTML);
                this.Data = Object.assign(this.Data, config);
            }
        } catch (error) {
            console.warn("JSON Parse fehlgeschlagen", error);
        }
    }
    /**
     * @param {any} value
     */
    set data(value) {
        this.Data = Object.assign(this.Data, value);
        this.updateOpeningHours();
    }

    connectedCallback() {
          if (this.shouldRenderCSS()) this.renderCSS();
    this.renderHTML();

    const template = this.querySelector('template');
    if (template) {
        try {
            const config = JSON.parse(template.innerHTML);
            this.Data = Object.assign({}, this.Data, config);
        } catch (error) {
            console.warn("Fehler beim Parsen des Templates", error);
        }
    }

    const sourceLink = this.querySelector('#oeffnungszeiten-link-source');
    if (sourceLink) {
        this.Data.link = sourceLink.href;
    }

    this.updateOpeningHours();
    this.interval = setInterval(() => this.updateOpeningHours(), 20000);
    }
    /**
     * 
     * @param {*} timeString 
     * @returns 
     */
    timeToMinutes(timeString) {
        if (!timeString) return null;
        const [hour, minute] = timeString.split(':').map(Number);
        return hour * 60 + minute;
    };

    updateOpeningHours() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        const statusTextElement = this.root.getElementById('status-text');
        const scheduleInfoElement = this.root.getElementById('schedule-info');
        const svgElement = this.root.getElementById('status-icon');
        const container = this.root.getElementById('oeffnungszeiten-link');

        if (!statusTextElement || !scheduleInfoElement) return;

        if (this.Data.link) {
            container.href = this.Data.link;
            if (this.Data.linkTarget) container.target = this.Data.linkTarget;
        }

        let statusText = "";
        let statusColor = "var(--m-red-800, #AE1F04)";
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
                    statusColor = ClosingSoon ? "var(--m-yellow-700, #E5A100)" : "var(--m-green-800, #408131)";
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
        statusTextElement.textContent = statusText;
        scheduleInfoElement.textContent = scheduleInfo;
        container.style.color = statusColor;
        svgElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 32 32" stroke-linejoin="round" stroke-linecap="round">
            <path stroke="${statusColor}" stroke-width="2.3" d="M16 8v8l5.333 2.667m8-2.667c0 7.364-5.97 13.333-13.333 13.333S2.667 23.363 2.667 16 8.637 2.667 16 2.667 29.333 8.637 29.333 16"></path>
        </svg>`;
    }

    disconnectedCallback() {
        if (this.interval) clearInterval(this.interval);
    }

    shouldRenderCSS() {
        return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
    }

    renderCSS() {
        this.css = /* css */`
        :host {
            font-family: var(--opening-hours-font-family);
        }
        
        #oeffnungszeiten-link {
            display: flex;
            align-items: center;
            gap: var(--opening-hours-gap);
            text-decoration: none;
        }

        .status {
            display: flex;
            flex-direction: column;
            font-weight: var(--opening-hours-font-weight);
        }
        `
        return this.fetchTemplate()
    }

    renderHTML() {
        this.html = /* HTML */ `
        <a id="oeffnungszeiten-link">
            <div id="status-icon"></div>
            <div class="status">
                <span id="status-text"></span>
                <span id="schedule-info"></span>
            </div>
        </a>
    `
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

if (typeof customElements !== 'undefined' && !customElements.get('gastro-m-openinghours')) {
    customElements.define('gastro-m-openinghours', OpeningHours);
}