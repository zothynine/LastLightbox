/**
 * No this library does not support jquery, becaus I loathe it!
 */

import * as media from './media.js'
import * as overlay from './overlay.js'
import * as slides from './slides.js'

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
        this.overlay = null
        this.slidesList = null
        this.slides = []
        this.initialize()
    }

    /**
     * Initialize lightbox
     */
    initialize() {
        console.info(`${this.logPrefix} Initializing…`)
        this.media = this.selectMedia()
        this.addInteractionHandlers()
        if (!this.overlay) this.injectOverlay()
        this.createSlides()
    }
}

LastLightbox.prototype.selectMedia = media.select
LastLightbox.prototype.addInteractionHandlers = media.addInteractionHandlers

LastLightbox.prototype.injectOverlay = overlay.inject
LastLightbox.prototype.showOverlay = overlay.show

LastLightbox.prototype.createSlides = slides.create


window.LastLightbox = LastLightbox
