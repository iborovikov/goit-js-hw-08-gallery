
const galleryListRef = document.querySelector('.js-gallery');
const lightBoxRef = document.querySelector('.js-lightbox');
const imgRef = document.querySelector('.lightbox__image');

galleryListRef.addEventListener('click', onPhotoClick);

function setAtributesOnImg(atribut, value) {
  imgRef.setAttribute(atribut, value);
};

function onPhotoClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  event.preventDefault();
  lightBoxRef.classList.add('is-open');

  setAtributesOnImg('src', event.target.dataset.source);
  setAtributesOnImg('alt', event.target.getAttribute('alt'))

};