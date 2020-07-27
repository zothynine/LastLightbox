/**
 * No this library does not support jquery, becaus I loathe it!
 */

import * as media from './media.js'

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
     * Initialize lightbox
     */
    initialize() {
        console.info(`${this.logPrefix} Initializing…`)
        const media = this.selectMedia()
        console.info(`${this.logPrefix} Found ${!!media && media.length || 0} media elements.`)
    }
}

LastLightbox.prototype.selectMedia = media.select

window.LastLightbox = LastLightbox
