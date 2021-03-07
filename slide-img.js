import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector('.js-gallery');
const lightBoxRef = document.querySelector('.js-lightbox');
const imgRef = document.querySelector('.lightbox__image');

const arrayOfAlts = gallery.map(elm => {
  return elm.description
})

window.addEventListener('keydown', onArrowPress);

function setAtributesOnImg(atribut, value) {
  imgRef.setAttribute(atribut, value);
};

function cleanAtributes() {
  lightBoxRef.classList.remove('is-open');
  setAtributesOnImg('src', '');
  setAtributesOnImg('alt', '');
};

function onArrowPress(event) {
  if (event.code === 'Escape') {
    cleanAtributes();
  } else if (event.code === 'ArrowRight') {
      const currentImg = imgRef.getAttribute('alt');
      let index = arrayOfAlts.indexOf(currentImg);

      if (index >= arrayOfAlts.length - 1) {
      return  index = arrayOfAlts.length - 1;
      };
      const newSrc = gallery[index + 1].original;
      const newAlt = gallery[index + 1].description;

      setAtributesOnImg('src', newSrc);
      setAtributesOnImg('alt', newAlt);
  } else if (event.code === 'ArrowLeft') {
      const currentImg = imgRef.getAttribute('alt');
      let index = arrayOfAlts.indexOf(currentImg);
      if (index <= 0) {
      return  index = 0;
      };
      const newSrc = gallery[index - 1].original;
      const newAlt = gallery[index - 1].description;

      setAtributesOnImg('src', newSrc);
      setAtributesOnImg('alt', newAlt);
 }
};