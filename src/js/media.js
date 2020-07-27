/**
 * Find media elements in DOM
 */
function select() {
    console.info(`${this.logPrefix} Searching for media elements…`)
    return document.querySelectorAll('main img')
}

export { select }
