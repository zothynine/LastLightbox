/**
 * No this library does not support jquery, becaus I loathe it!
 */

import * as media from './media.js'
import * as overlay from './overlay.js'

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
        this.logPrefix = 'LL /'
        this.initialize()
    }

    /**
     * Initialize lightbox
     */
    initialize() {
        console.info(`${this.logPrefix} Initializing…`)
        const media = this.selectMedia()
    }
}

LastLightbox.prototype.onMediaItemClick = media.onMediaItemClick
LastLightbox.prototype.addInteractionHandlers = media.addInteractionHandlers
LastLightbox.prototype.selectMedia = media.select

LastLightbox.prototype.showOverlay = overlay.show

window.LastLightbox = LastLightbox
