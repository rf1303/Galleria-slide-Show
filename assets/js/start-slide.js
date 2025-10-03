import { galleryHero, galleryHeroBtn } from './hero.js';

const btnSlide = document.getElementById('btn__slide');
const wrapperAside = document.getElementById('wrapper__aside');
const btnPreview = document.getElementById('btn__preview');
const btnNext = document.getElementById('btn__next');
const totalAside = 15; 
let slideInterval;

export function slideStartStop() {
    const ariaBtn = btnSlide.getAttribute('aria-pressed');
    const dataAside = wrapperAside.dataset.aside;
    if (ariaBtn === "true") {
        btnSlide.textContent = "start slideshow";
        btnSlide.setAttribute('aria-pressed', 'false');
        clearInterval(slideInterval);
    } else {
        btnSlide.textContent = "stop slideshow";
        btnSlide.setAttribute('aria-pressed', 'true');
        if (dataAside === '0') {
            galleryHeroBtn(dataAside);
            slideShow();
        } else {
            galleryHeroBtn(dataAside);
            slideShow();
        }
    }
}

function slideShow() {
    slideInterval = setInterval(() => {
        let aside = parseInt(wrapperAside.dataset.aside, 10);
        aside = (aside + 1) % 15;
        wrapperAside.dataset.aside = aside;
        asideAnimate(aside);
    }, 4000);

}

export function asideAnimate(aside) {
    wrapperAside.classList.add('aside__out');
    wrapperAside.addEventListener('animationend', function asideChange(e) {
        if (e.animationName === "asideOut") {
            galleryHeroBtn(aside);
            wrapperAside.classList.remove('aside__out');
            wrapperAside.classList.add('aside__in');
        } else if (e.animationName === 'aside__in') {
            wrapperAside.classList.remove('aside__in');
        }
        wrapperAside.removeEventListener('animationend', asideChange)
    })
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

 
btnPreview.addEventListener('click', () => {
    let asidePreview = parseInt(wrapperAside.dataset.aside, 10) || 0;
    asidePreview = nextPrev(asidePreview - 1, totalAside);
    wrapperAside.dataset.aside = asidePreview;
    asideAnimate(asidePreview);
});

btnNext.addEventListener('click', () => {
    let asideNext = parseInt(wrapperAside.dataset.aside, 10) || 0;
    asideNext = nextPrev(asideNext + 1, totalAside);
    wrapperAside.dataset.aside = asideNext;
    asideAnimate(asideNext);
});

function nextPrev(aside, totalAside) {
    return ((aside % totalAside) + totalAside) % totalAside;
}
