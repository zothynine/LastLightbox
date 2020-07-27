let logPrefix = 'LL MEDIA /'

/**
 * Handle clickevent on media item
 * @param {event} e
 */
function onMediaItemClick(e) {
    console.debug(`clicked ${e.target}`)
}

/**
 * Setup click handlers on media items
 * @param {NodeList} media
 */
function addInteractionHandlers(media) {
    if (!media) return;
    console.info(`${logPrefix} Adding interaction handlers on ${media.length} elements`)
    media.forEach(item => {
        item.addEventListener('click', onMediaItemClick)
    })
}

/**
 * Find media elements in DOM
 */
function select() {
    console.info(`${logPrefix} Searching for media elements…`)
    const media = document.querySelectorAll('main img')
    console.info(`${logPrefix} Set up ${!!media && media.length || 0} media elements.`)
    addInteractionHandlers(media)
    return media
}

export { select }
