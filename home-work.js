
import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector('.js-gallery');
const lightBoxRef = document.querySelector('.js-lightbox');
const galleryMarkup = gallery.map(makeGaleryMarkup).join('');
const imgRef = document.querySelector('.lightbox__image');


galleryListRef.addEventListener('click', onPhotoClick);
galleryListRef.insertAdjacentHTML('afterbegin', galleryMarkup);
lightBoxRef.addEventListener('click', onCloseBtnClick);
window.addEventListener('keydown', onEscPress);


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
  
function onPhotoClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  event.preventDefault();
  lightBoxRef.classList.add('is-open');
  imgRef.setAttribute('src', event.target.dataset.source);
  imgRef.setAttribute('alt', event.target.getAttribute('alt'));
}
  
function onCloseBtnClick(event) {
  if (event.target.nodeName === 'IMG') {
    return;
  };
  lightBoxRef.classList.remove('is-open');
  imgRef.setAttribute('src', '');
  imgRef.setAttribute('alt', '');
};
function onEscPress(event) {
  if (event.code === 'Escape') {
      lightBoxRef.classList.remove('is-open');
  imgRef.setAttribute('src', '');
  imgRef.setAttribute('alt', '');
  };
  
};































