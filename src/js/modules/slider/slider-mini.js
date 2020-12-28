import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }
    decorizeSlides() {
        try {
            this.slides.forEach(slide => {
                slide.classList.remove(this.activeClass);
                if (this.animate) {
                    slide.querySelector('.card__title').style.opacity = '0.4';
                    slide.querySelector('.card__controls').style.opacity = '0.4';
                }
            });
    
            this.slides[0].classList.add(this.activeClass);
    
            if (this.animate) {
                this.slides[0].querySelector('.card__title').style.opacity = '1';
                this.slides[0].querySelector('.card__controls').style.opacity = '1';
            }
        } catch(error){}
    }
    moveRight() {
        this.next.addEventListener('click', () => {
            let current = this.slides.shift();
            this.container.append(current);
            this.slides.push(current);
            this.decorizeSlides();
        });
    }
    moveLeft() {
        this.prev.addEventListener('click', () => {
            let current = this.slides.pop();
            this.container.prepend(current);
            this.slides.unshift(current);
            this.decorizeSlides();
        });
    }
    init() {
        try {
            this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
                `;
            this.moveRight();
            this.moveLeft();
        } catch(error){}
    }
}