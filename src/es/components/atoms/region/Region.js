// @ts-check
import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

/**
* @export
* @class Region
* @type {CustomElementConstructor}
*/
export default class Region extends Shadow() {
  constructor (options = {}, ...args) {
    super({ importMetaUrl: import.meta.url, ...options }, ...args)
  }

  connectedCallback () {
    this.hidden = true
    const showPromises = []
    if (this.shouldRenderCSS()) showPromises.push(this.renderCSS())
    if (this.shouldRenderHTML()) showPromises.push(this.renderHTML())
    Promise.all(showPromises).then(() => (this.hidden = false))
  }

  disconnectedCallback () {}

  /**
   * evaluates if a render is necessary
   *
   * @return {boolean}
   */
  shouldRenderCSS () {
    return !this.root.querySelector(`${this.cssSelector} > style[_css]`)
  }

  /**
   * evaluates if a render is necessary
   *
   * @return {boolean}
   */
  shouldRenderHTML () {
    return !this.div
  }

  /**
   * renders the css
   * @returns Promise<void>
   */
  renderCSS () {
    this.css = /* css */`
      :host {
        --any-a-display: flex;
        --a-color: var(--color);
        --a-text-decoration-hover: none;
        position: absolute;
        z-index: 9999;
        right: calc((100% - var(--header-default-content-width,var(--content-width, 55%))) / 2);
        width: fit-content;
      }

      :host > div {
        display: flex;
        flex-direction: column;
      }

      :host a.region-item {
        display: flex;
        margin: 0 !important;
        align-items: center;
        gap: 0.25em;
        font-size: .875rem;
        font-family: var(--font-family-bold, var(--font-family, inherit));
        transition: color 0.3s ease-out
      }

      :host a.region-header {
        display: flex;
        margin: 0 !important;
        align-items: center;
        gap: 0.25em;
        font-size: .85em;
        font-family: var(--font-family, inherit);
        transition: color 0.3s ease-out
      }

      @media only screen and (max-width: _max-width_) {
        :host {
          left: 20vw;
        }
      }
    `
    return this.fetchTemplate()
  }

  /**
   * fetches the template
   */
  fetchTemplate () {
    /** @type {import("../../web-components-toolbox/src/es/components/prototypes/Shadow.js").fetchCSSParams[]} */
    const styles = [
      {
        path: `${this.importMetaUrl}../../web-components-toolbox/src/css/reset.css`, // no variables for this reason no namespace
        namespace: false
      },
      {
        path: `${this.importMetaUrl}../../web-components-toolbox/src/css/style.css`, // apply namespace and fallback to allow overwriting on deeper level
        namespaceFallback: true
      }
    ]
    switch (this.getAttribute('namespace')) {
      case 'region-default-':
        return this.fetchCSS([{
          path: `${this.importMetaUrl}./default-/default-.css`, // apply namespace since it is specific and no fallback
          namespace: false
        }, ...styles], false) // using showPromises @connectedCallback makes hide action inside Shadow.fetchCSS obsolete, so second argument hide = false
      default:
        return this.fetchCSS(styles)
    }
  }

  /**
   * Render HTML
   * @returns Promise<void>
   */
  renderHTML () {
    const regionHTML = this.hideRegionFlag
      ? ''
      : /* html */ `
        <a class="region-header" href="${this.metaLink}">
            <div><img src="${this.importMetaUrl}../../../../img/compass.svg" alt="compass" width="24" height="24"></div>
            <div>${this.metaTitle}</div>
        </a>
      `

    const titleHTML = this.title
      ? /* html */ `<a href="${this.link}" class="region-item">
          <div><img src="${this.importMetaUrl}../../../../img/location.svg" alt="location" width="24" height="24"></div>
          <div><div>${this.title}</div><div>${this.region}</div></div>
        </a>
      `
      : ''
    this.html = /* html */`
      <div>
        ${regionHTML}
        ${titleHTML}
      </div>
    `
  }

  get div () {
    return this.root.querySelector('div')
  }

  get title () {
    const title = this.getAttribute('title') || ''
    const index = title.indexOf(' ')
    if (index > 0) {
      return title.slice(0, index + 1) + '<br>' + title.slice(index + 1)
    }
  }

  get region () {
    return this.getAttribute('region') || ''
  }

  get link () {
    return this.getAttribute('link') || ''
  }

  get metaLink () {
    return this.getAttribute('meta-link') || ''
  }

  get metaTitle () {
    return this.getAttribute('meta-title') || ''
  }

  get hideRegionFlag () {
    return this.hasAttribute('hide-region')
  }
}
