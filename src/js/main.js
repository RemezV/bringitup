import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const sliderMain = new MainSlider({btns: '.next', page: '.page'});
    sliderMain.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});