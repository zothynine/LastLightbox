/**
 * Find text nodes for figures
 * @param {Node} source
 * @param {Node} slide
 */
function findAndInjectTextNodes(source, slide) {
    // ${!!source.parentNode.querySelector('figcaption') && source.parentNode.querySelector('figcaption').outerHTML  || ''}
    // ${!!source.parentNode.querySelector('footer') && source.parentNode.querySelector('footer').outerHTML || ''}

    const nodes = source.parentNode.querySelectorAll('*') //source.parentNode.children
    const allowedNodes = ['figcaption', 'footer', 'p']
    let nodesString = ''

    for (let i=0; i < nodes.length; i++) {
        const name = nodes[i].nodeName.toLowerCase()
        if (allowedNodes.indexOf(name) > -1) nodesString += nodes[i].outerHTML
    }

    if (nodesString !== '') {
        slide.insertAdjacentHTML('beforeend', `
            <div class="ll--description">
                ${nodesString}
            </div>
        `)
    }
}

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
        const currentSlide = this.slidesList.querySelector('.ll--slide:last-child')
        this.slides.push(currentSlide)
        findAndInjectTextNodes(item, currentSlide)
    })
    console.info(`${this.logPrefix} Created ${this.slides.length} slides`)
}

export { create }
