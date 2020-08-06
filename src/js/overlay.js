const overlayTemplate = `
<div class="ll--overlay" hidden="true">
    <ul class="ll--slides"></ul>
</div>`

/**
 * Handle clicks on the overlay element
 * @param {event} e
 */
function onOverlayClick(e, inst) {
    inst.overlay.setAttribute('hidden', true) // ! should only happen when clicking the close button in the futute
    document.body.classList.remove('ll--scroll-lock')

}

/**
 * Inject overlay HTML
 */
function inject() {
    console.info(`${this.logPrefix} Injecting overlay HTML`)
    document.body.insertAdjacentHTML('beforeend', overlayTemplate)
    this.overlay = document.body.querySelector('.ll--overlay')
    this.overlay.addEventListener('click', e => {
        onOverlayClick(e, this)
    })
    this.slidesList = this.overlay.querySelector('.ll--slides')
}

/**
 * Show the lightbox overlay
 */
function show() {
    console.info(`${this.logPrefix} Activating ll--overlay`)
    document.body.classList.add('ll--scroll-lock')
    this.overlay.removeAttribute('hidden')
}

export { show, inject }
