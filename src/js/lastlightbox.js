/**
 * No this library does not support jquery, becaus I loathe it!
 */

/**
 * A class to create lastlightbox instances
 */
class LastLightbox {

    /**
     * Constructor
     * @param {Object} config
     */
    constructor(config) {
        this.config = config
        this.logPrefix = 'LastLightbox /'
        this.initialize()
    }

    /**
     * Find media elements in DOM
     */
    selectMedia() {
        console.info(`${this.logPrefix} Searching for media…`)
        return document.querySelectorAll('main img')
    }

    /**
     * Initialize lightbox
     */
    initialize() {
        console.info(`${this.logPrefix} Initializing…`)
        const media = this.selectMedia()
        console.info(`${this.logPrefix} Found ${!!media && media.length || 0} media elements.`)
    }
}

window.LastLightbox = LastLightbox
