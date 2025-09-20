import { jsonData } from "./jsonLoad.js";

    const wrapperAside = document.getElementById('wrapper__aside'); 
    const footerLine = document.getElementById('footer__line');
    const wrapperFooter = document.getElementById('wrapper__footer'); 
    const heroLarge = document.getElementById('hero__large'); 
    const heroImg = document.getElementById('img__hero'); 
    const viewImage = document.getElementById('view__image'); 
    const pictureTitle = document.getElementById('picture__title'); 
    const pictureArtist = document.getElementById('picture__artist'); 
    const pictureImg = document.getElementById('picture__img'); 
    const textLead = document.getElementById('text__lead'); 
    const leadWiki = document.getElementById('lead__wiki'); 
    const footerTitle = document.getElementById('footer__title'); 
    const footerArtist = document.getElementById('footer__artist'); 


    export async function galleryHero(index)  {
        const dataJson = await jsonData;
        const item = dataJson[index];   
        console.log('galleryHero', item);
    };
