
import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector('.js-gallery');
const lightBoxRef = document.querySelector('.js-lightbox');
const imgRef = document.querySelector('.lightbox__image');
const galleryMarkup = gallery.map(makeGaleryMarkup).join('');

const arrayOfAlts = gallery.map(elm => {
  return elm.description
})

galleryListRef.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryListRef.addEventListener('click', onPhotoClick);
lightBoxRef.addEventListener('click', onCloseBtnClick);
window.addEventListener('keydown', onKeyPress);



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
};

function onCloseBtnClick(event) {
  if (event.target.nodeName === 'IMG') {
    return;
  };
  lightBoxRef.classList.remove('is-open');
  imgRef.setAttribute('src', '');
  imgRef.setAttribute('alt', '');
};

function onKeyPress(event) {
  if (event.code === 'Escape') {
    lightBoxRef.classList.remove('is-open');
    imgRef.setAttribute('src', '');
    imgRef.setAttribute('alt', '');
  }

  else if (event.code === 'ArrowRight') {
    const currentImg = imgRef.getAttribute('alt');
    let index = arrayOfAlts.indexOf(currentImg);

    if (index >= arrayOfAlts.length - 1) {
    return  index = arrayOfAlts.length - 1;
    };
    const newSrc = gallery[index + 1].original;
    const newAlt = gallery[index + 1].description;

    imgRef.setAttribute('src', newSrc);
    imgRef.setAttribute('alt', newAlt);
  }
    
  else if (event.code === 'ArrowLeft') {
    const currentImg = imgRef.getAttribute('alt');
    let index = arrayOfAlts.indexOf(currentImg);
    if (index <= 0) {
    return  index = 0;
    };
    const newSrc = gallery[index - 1].original;
    const newAlt = gallery[index - 1].description;

    imgRef.setAttribute('src', newSrc);
    imgRef.setAttribute('alt', newAlt);
 }
};































