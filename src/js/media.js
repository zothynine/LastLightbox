/**
 * Setup click handlers on media items
 */
function addInteractionHandlers() {
    if (!this.media) return;
    console.info(`${this.logPrefix} Adding interaction handlers on ${this.media.length} elements`)
    this.media.forEach(item => {
        item.classList.add('ll--clickable')
        item.addEventListener('click', e => {
            console.info(`${this.logPrefix} Media clicked - Show overlay`)
            this.showOverlay()
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
    return media
}

export { select, addInteractionHandlers }
