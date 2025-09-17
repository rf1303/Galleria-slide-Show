import { jsonData } from './jsonLoad.js';

export function thumbnailHtml(dataJson, index) {
    console.log('dataJson.name: ', dataJson.name)
    return `
            <li class="gallery__item" data-index="${index}" >
                <a href="#" class="gallery__link" data-name="${dataJson.name}">
                    <figure class="thumbnail__card thumb__width ">
                        <img src="${dataJson.images.thumbnail}" class="thumbnail__img"
                            alt="Portrait of Vincent Van Gogh">
                        <figcaption class="thumbnail__figcaption  ">
                            <h3 class="fs-24 ff-bold lh-125 h-fit">${dataJson.name}</h3>
                            <p class="fs-13 ff-regular lh-125">${dataJson.artist.name}</p>
                        </figcaption>
                    </figure>
                </a>
            </li>
        `
}


export async function galleryList() {

    const dataJson = await jsonData;
    if (!dataJson) return;

    const galleryItems = document.getElementById('gallery__list');
    galleryItems.innerHTML = '';

    const order = [0, 1, 2, 3, 4, 7, 6, 5, 10, 8, 9, 13, 14, 12, 11];

    order.forEach((index) => {

        const items = dataJson[index];
        if (items) {
            galleryItems.insertAdjacentHTML('beforeend', thumbnailHtml(items, index));
        }
    });

    setTimeout(() => {
        thumbGallery();
    }, 200);
}

export function thumbRowImg(item) {
    const grid = document.querySelector('.grid__gallery');
    const computedStyle = getComputedStyle(grid);
    const rowHeight = parseInt(computedStyle.getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(computedStyle.getPropertyValue('gap')) ||
        parseInt(computedStyle.getPropertyValue('row-gap')) || 40;

    const img = item.querySelector('.thumbnail__img') || item;
    if (!img) return;

    /* console.log('natural Height: ', img.naturalHeight); */
    const contentHeight = img.getBoundingClientRect().height;
    /* const contentHeight = img.naturalHeight; */
    if (contentHeight === 0) {
        img.addEventListener('load', () => thumbRowImg(item), { once: true });
        return;
    }
    /* console.log('contentHeight: ', contentHeight, ' rowHeight: ', rowHeight, ' rowGap: ', rowGap); */

    const spanRow = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
    if (item.dataset.index === "12") {
        console.log("ITEM 12", item.dataset.index)
        item.style.gridRowEnd = `span ${spanRow - 1}`;
    } else {
        item.style.gridRowEnd = `span ${spanRow}`;
    }
}

export function thumbGallery() {
    const itemsImg = document.querySelectorAll('.gallery__item');

    itemsImg.forEach(element => {
        thumbRowImg(element);
    });
}

export function initGallery() {
    thumbGallery();
    window.addEventListener('resize', () => {
        setTimeout(() => {
            thumbGallery();
        }, 100);
    });
}


















