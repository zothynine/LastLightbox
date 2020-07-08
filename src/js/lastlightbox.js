/**
 * No this library does not support jquery, becaus I hate it!
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
        this.initialize()
    }

    /**
     * Initialize lightbox
     */
    initialize() {
        console.info('initializing Last Lightbox…')
    }
}

window.LastLightbox = LastLightbox
