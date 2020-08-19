/**
 * Create slides in sides container from media data
 * @param {NodeList} media
 */
function create() {
    console.info(`${this.logPrefix} Create and inject ll--slide elements from media data`)
    this.media.forEach(item => {
        const clone = item.cloneNode()
        clone.removeAttribute('class')
        !!clone.dataset.llsrc && clone.setAttribute('src', clone.dataset.llsrc)
        const figureStr = clone.outerHTML
        this.slidesList.insertAdjacentHTML('beforeend', `
        <li class="ll--slide">
            <figure>
                ${figureStr}
            </figure>
        </li>`)
        this.slides.push(this.slidesList.querySelector('.ll--slide:last-child'))
    })
    console.info(`${this.logPrefix} Created ${this.slides.length} slides`)
}

export { create }
