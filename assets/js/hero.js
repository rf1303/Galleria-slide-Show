import { jsonData } from "./jsonLoad.js"; import { slideGallery } from "./start-slide.js";

const galleryLink = document.querySelectorAll('.gallery__link');
const wrapperMain = document.getElementById('wrapper__main');
const wrapperAside = document.getElementById('wrapper__aside');
const footerLine = document.getElementById('footer__line');
const wrapperFooter = document.getElementById('wrapper__footer');
const heroLarge = document.getElementById('hero__large');
const heroImg = document.getElementById('img__hero');
const pictureTitle = document.getElementById('picture__title');
const pictureArtist = document.getElementById('picture__artist');
const pictureImg = document.getElementById('img__artist');
const textLead = document.getElementById('text__lead');
const leadWiki = document.getElementById('lead__wiki');
const footerTitle = document.querySelector('.footer__title');
const footerArtist = document.querySelector('.footer__artist');
const imgModal = document.querySelector('.img__modal');
const btnGallery = document.getElementById('btn__gallery');

export function galleryHeroBtn(index) {
    btnGallery.setAttribute('aria-expanded', 'false');
    wrapperMain.classList.add('hidden');
    wrapperAside.classList.remove('hidden');
    wrapperFooter.classList.remove('hidden');
    footerLine.classList.remove('hidden');
    galleryHero(index);
}

export async function galleryHero(index) {
    const dataJson = await jsonData;
    const item = dataJson[index];
    heroLarge.srcset = item.images.hero.large;
    heroImg.src = item.images.hero.small;
    pictureTitle.textContent = item.name;
    pictureArtist.textContent = item.artist.name;
    pictureImg.src = item.artist.image;
    textLead.textContent = item.description;
    leadWiki.href = item.source;
    footerTitle.textContent = item.name
    footerArtist.textContent = item.artist.name;
    imgModal.src = item.images.gallery;
    footerLine.style.width = `${6.66666 * (++index)}%`
};


