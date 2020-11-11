import Slider from './modules/slider';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const sliderMain = new Slider('.page', '.next');
    sliderMain.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});