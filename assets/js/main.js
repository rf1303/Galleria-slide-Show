import './gallery.js';
import { galleryList, thumbGallery, galleryBtn } from './gallery.js';
import {  slideStartStop } from './start-slide.js';
import { galleryHeroBtn } from './hero.js';

galleryList();

document.addEventListener('DOMContentLoaded', () => {
    const wrapperAside = document.getElementById('wrapper__aside');
    const btnGallery = document.getElementById('btn__gallery');
    const btnSlide = document.getElementById('btn__slide');
    const galleryGrid = document.querySelector('.grid__gallery');
    const galleryLink = document.querySelector('.gallery__link');
    console.log('galleryLink DOM: ', galleryLink);


    btnGallery.addEventListener('click', () => {
        galleryBtn();
        thumbGallery();
    });

    btnSlide.addEventListener('click', () => {
        console.log('slideStartStop');
        slideStartStop();
    });

    galleryGrid.addEventListener('click', (e) => {
        const btnLink = e.target.closest('.gallery__link');
        if (!btnLink) return;
        const index = btnLink.dataset.index;
        wrapperAside.dataset.aside = index;
        galleryHeroBtn(index);
    })

});

window.addEventListener('load', thumbGallery);
window.addEventListener('resize', thumbGallery);
