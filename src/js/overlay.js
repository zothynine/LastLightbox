const overayTemplate = '<div class="ll--overlay"></div>'
let overlay = null

/**
 * Handle clicks on the overlay element
 * @param {event} e
 */
function onOverlayClick(e) {
    if (event.target === overlay)
        overlay.setAttribute('hidden', true)


    document.body.classList.remove('ll--scroll-lock')

}

/**
 * Inject overlay HTML
 */
function inject(inst) {
    console.info(`${inst.logPrefix} Injecting overlay HTML`)
    document.body.insertAdjacentHTML('beforeend', overayTemplate)
    overlay = document.body.querySelector('.ll--overlay')
    overlay.addEventListener('click', onOverlayClick)
}

/**
 * Show the lightbox overlay
 */
function show() {
    console.info(`${this.logPrefix} Activating ll--overlay`)
    document.body.classList.add('ll--scroll-lock')
    if (!overlay) {
        inject(this)
    } else if (overlay.hasAttribute('hidden')) {
        overlay.removeAttribute('hidden')
    }
}

export { show }
