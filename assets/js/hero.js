import { jsonData } from "./jsonLoad.js";

const wrapperAside = document.getElementById('wrapper__aside');
const footerLine = document.getElementById('footer__line');
const wrapperFooter = document.getElementById('wrapper__footer');
const heroLarge = document.getElementById('hero__large');
const heroImg = document.getElementById('img__hero');
const viewImage = document.getElementById('view__image');
const pictureTitle = document.getElementById('picture__title');
const pictureArtist = document.getElementById('picture__artist');
const pictureImg = document.getElementById('img__artist');
const textLead = document.getElementById('text__lead');
const leadWiki = document.getElementById('lead__wiki');
const footerTitle = document.querySelector('.footer__title');
const footerArtist = document.querySelector('.footer__artist');


export async function galleryHero(index) {
    const dataJson = await jsonData;
    const item = dataJson[index];

    console.log('item: ', item);
    console.log('item.name: ', item.name);
    heroLarge.srcset = item.images.hero.large;
    heroImg.src = item.images.hero.small;
    pictureTitle.textContent = item.name;
    pictureArtist.textContent = item.artist.name;
    pictureImg.src = item.artist.image;
    textLead.textContent = item.description;
    leadWiki.href = item.source;
    footerTitle.textContent = item.name
    footerArtist.textContent = item.artist.name;
    footerLine.style.width = `${6.666 * (index+1)}%`

};
