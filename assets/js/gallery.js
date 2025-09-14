import { jsonData } from './jsonLoad.js';

export function thumbnailHtml(dataJson, index) {
    console.log('thumbnailHtml index: ',typeof index);
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
    console.log('dataJson galleryList: ', dataJson[0]);
    if(!dataJson) return;

    const galleryItems = document.getElementById('gallery__list');

    galleryItems.innerHTML = '';

    dataJson.forEach((json, index) => {
        /* console.log('dataJson[index]: ', json); */
        console.log('Index: ', index );
        galleryItems.insertAdjacentHTML('beforeend', thumbnailHtml(json, index));
    });

    setTimeout(() => {
        thumbGallery();
    }, 200);
}

// export function renderGalleria(dataJson) {
//
//     const galleriaList = document.getElementById('galleria__list');
//
//     const jsonHtml = dataJson.map((galleria) => {
//
//         tumbnailHtml(galleria).join('');
//     })
//
//     galleriaList.innerHTML = jsonHtml;
//
//     console.log(`🎨 Renderizadas ${dataJson.name.length} obras de arte`);
//
//     setTimeout(resizeGridItems, 100)
// }

export function thumbRowImg(item) {
    const grid = document.querySelector('.grid__gallery');
    const thumbImg = document.querySelector('.thumbnail__img');
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
        img.addEvenListener('load', () => thumbRowImg(item), { once: true });
        return;
    }
    /* console.log('contentHeight: ', contentHeight, ' rowHeight: ', rowHeight, ' rowGap: ', rowGap); */

    const spanRow = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));

    item.style.gridRowEnd = `span ${spanRow}`;
    /* console.log('spanRow: ', spanRow); */
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

// export function resizeGridItems() {
//
//     const grid = document.querySelector('.grid__gallery');
//
//     const items = grid.querySelectorAll('.thumbnail__card');
//
//     const gridStyles = window.getComputedStyle(grid);
//
//     const rowHeight = parseInt(gridStyles.getPropertyValue('grid-auto-rows'));
//
//     const rowGap = parseInt(gridStyles.getPropertyValue('grid-row-gap'));
//
//     let procesItems = 0;
//
//     items.forEach((item, index) => {
//
//         const img = item.querySelector('.thumbail__img img');
//         if (!img) return;
//
//         if (img.complete && img.naturalHeight > 0) {
//             console.log('naturalHeight: ', img.naturalHeight);
//
//             calculateRows(item, img, rowHeight, rowGap, index);
//             procesItems++;
//
//         } else {
//             /*  ⏳ Imagen aún cargando: esperar al evento onload    */
//             img.onload = () => {
//                 calculateRows(item, img, rowHeight, rowGap, index);
//                 procesItems++;
//                 updateDebugInfo('procesadas: ${procesItems}/ ${items.length}')
//             }
//         }
//     });
//
//     updateDebugInfo('Grid: ${procesItems}/ ${items.length} procesadas')
//
// }
//
// export function calculateRows(item, img, rowHeight, rowGap, index) {
//
//     const imgHeight = img.getBoundingClientRect().height;
//     console.log('imgHeight: ', imgHeight);
//
//     const rowsNeeded = Math.ceil((imgHeight + rowGap) / (rowHeight + rowGap));
//     console.log('rowsNeeded: ', rowsNeeded);
//
//     item.style.gridRowEnd = `span ${rowsNeeded}`;
//
//     item.setAttribute('data-rows', rowsNeeded);
//     console.log(`🎨 ${item.dataset.name}: ${imgHeight}px → ${rowsNeeded} filas`);
//
// }



















