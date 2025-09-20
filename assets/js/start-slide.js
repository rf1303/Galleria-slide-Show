import { galleryList, initGallery } from './gallery.js';
import {galleryHero} from './hero.js';

export function slideStartStop(slideIndex) {
    const galleryLink = document.querySelector('.gallery__link');
    if (slideIndex === 0) {
        slideGallery(slideIndex);
    } else {
        const index = galleryLink.dataset.index;
    }
}

export function slideGallery(index) {
    const btnGallery = document.getElementById('btn__gallery');
    const btnSlide = document.getElementById('btn__slide');
    const wrapperMain = document.getElementById('wrapper__main');
    const wrapperAside = document.getElementById('wrapper__aside');
    const footerLine = document.getElementById('footer__line');
    const wrapperFooter = document.getElementById('wrapper__footer');
    const ariaBtn = btnSlide.getAttribute('aria-pressed');

    if (ariaBtn === "false") {
        btnGallery.setAttribute('aria-expanded', 'false');
        btnSlide.setAttribute('aria-pressed', 'true');
        btnSlide.textContent = "stop slideshow";
        wrapperMain.classList.add('hidden');
        wrapperAside.classList.remove('hidden');
        wrapperFooter.classList.remove('hidden');
        footerLine.classList.remove('hidden');
    }
    galleryHero(index);
}




