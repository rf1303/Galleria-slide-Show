import './gallery.js';
import { galleryList, initGallery, thumbGallery, galleryBtn } from './gallery.js';
import {slideGallery} from './start-slide.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('inicio');
    let slideIndex = 0;
    const btnGallery = document.getElementById('btn__gallery');
    const btnSlide = document.getElementById('btn__slide');
    const wrapperMain = document.getElementById('wrapper__main');
    const wrapperAside = document.getElementById('wrapper__aside'); 
    const footerLine = document.getElementById('footer__line');
    const wrapperFooter = document.getElementById('wrapper__footer'); 

    galleryList(); 

    btnGallery.addEventListener('click', () => {
        galleryBtn();
        thumbGallery();
        console.log('btnGallery');
    });
    btnSlide.addEventListener('click', () => {
        slideGallery(slideIndex);
    });
    // jsonData.then(data => {
    //     console.log('jsonData: ', data);
    // })
});

window.addEventListener('load', thumbGallery);
window.addEventListener('resize', thumbGallery);
