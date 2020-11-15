import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';
import MiniSlider from './modules/slider/slider-mini';
import Differences from './modules/differences';
import Form from './modules/form';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    const sliderMain = new MainSlider({btns: '.next', container: '.page'});
    sliderMain.render();

    const moduleSlider = new MainSlider({
        container: '.moduleapp',
        btns: '.next'
    });
    moduleSlider.render();

    const showupSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showupSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    }); 
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    }); 
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Differences('.officerold', '.officernew', '.officer__card-item').init();

    new Form('form', 'assets/question.php').init();

    new ShowInfo('.plus').init();

    new Download('.download').init();
});