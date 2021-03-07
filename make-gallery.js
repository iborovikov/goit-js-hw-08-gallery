import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector('.js-gallery');
const galleryMarkup = gallery.map(makeGaleryMarkup).join('');

galleryListRef.insertAdjacentHTML('afterbegin', galleryMarkup);

function makeGaleryMarkup (image) {
  const { preview, original, description } = image;
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};