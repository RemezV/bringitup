import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }
    showSlides(n) {
        
        try {
            const teacher = document.querySelector('.hanson');
            teacher.classList.add('animated', 'slideInUp');
            teacher.style.display = 'none';
            
            if( this.slideIndex === 3 ) setTimeout(() => teacher.style.display = 'block', 3000);
        } catch(err){}


        try {
            if (n > this.slides.length) {
                this.slideIndex = 1;
            }
            if (n < 1) {
                this.slideIndex = this.slides.length;
            }
            this.slides.forEach(slide => slide.style.display = 'none');
            this.slides[this.slideIndex - 1].style.display = 'block';
        } catch(error) {}
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    bindTriggers() {
        document.querySelectorAll('.prev').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
            });
        });
        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });
    }
    render() {
        if (this.container) {
            this.btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.plusSlides(1);
                });
                if (!btn.parentNode.previousElementSibling.classList.contains('module__info-book')) {
                    btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.slideIndex = 1;
                        this.showSlides(this.slideIndex);
                    });
                }
            });
    
            this.showSlides(this.slideIndex);
        }
        this.bindTriggers();
    }
}