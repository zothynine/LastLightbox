/**
 * Handle clickevent on media item
 * @param {event} e
 * @param {object} inst
 */
function onMediaItemClick(e, inst) {
    inst.showOverlay()
}

/**
 * Setup click handlers on media items
 * @param {NodeList} media
 */
function addInteractionHandlers(media) {
    if (!media) return;
    console.info(`${this.logPrefix} Adding interaction handlers on ${media.length} elements`)
    media.forEach(item => {
        item.classList.add('ll--clickable')
        item.addEventListener('click', e => {
            onMediaItemClick(e, this)
        })
    })
}

/**
 * Find media elements in DOM
 */
function select() {
    console.info(`${this.logPrefix} Searching for media elements…`)
    const media = document.querySelectorAll('main img')
    console.info(`${this.logPrefix} Set up ${!!media && media.length || 0} media elements.`)
    this.addInteractionHandlers(media)
    return media
}

export { select, addInteractionHandlers, onMediaItemClick }
