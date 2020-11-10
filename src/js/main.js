import Slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    const sliderMain = new Slider('.page', '.next');
    sliderMain.render();
});