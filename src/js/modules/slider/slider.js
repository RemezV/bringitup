export default class Slider {
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animate = false,
        autoplay = false
        } = {}) {
        this.container = document.querySelector(container);
        this.slides = Array.from(this.container.children).filter(slide => slide.localName != 'button');
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}