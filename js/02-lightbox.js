import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const imagesGallery = galleryItems.reduce((acc, {preview, original, description}) =>
  acc +
    `<a class="gallery__item" href="${original}">
         <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>`
  , "");

gallery.insertAdjacentHTML("beforeend", imagesGallery);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
