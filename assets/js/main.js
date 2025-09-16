import './gallery.js';
import { galleryList, thumbGallery } from './gallery.js';
import { jsonData } from './jsonLoad.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('inicio');

    galleryList();  
    // jsonData.then(data => {
    //     console.log('jsonData: ', data);
    // })
});

window.addEventListener('load', thumbGallery);
window.addEventListener('resize', thumbGallery);

// window.addEventListener('load', () => {
//    setTimeout(resizeGridItems, 200); 
// });
//
// let resizeTimeOut;
// window.addEventListener('resize', () => {
//     clearTimeout(resizeTimeOut);
//     resizeTimeOut = setTimeout(resizeGridItems, 300);
// });
