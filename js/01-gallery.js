import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const imagesGallery = galleryItems.reduce((acc, {preview, original, description}) =>
  acc +
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
  , "");

gallery.insertAdjacentHTML("beforeend", imagesGallery);

const instance = basicLightbox.create(`   
    <img src="" alt="">
`);

gallery.addEventListener("click", evt => {
    evt.preventDefault();
    const imgUrl = evt.target.dataset.source;
    const imgAlt = evt.target.alt;
   
    instance.element().getElementsByTagName("img")[0].src = imgUrl;
    instance.element().getElementsByTagName("img")[0].alt = imgAlt;

    document.addEventListener("keydown", onKeypress);

    instance.show()
});

function onKeypress(evt) {
    if (evt.code === 'Escape') {
        instance.close(() => document.removeEventListener("keydown", onKeypress));
    }
};
