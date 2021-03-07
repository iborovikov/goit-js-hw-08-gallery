
const lightBoxRef = document.querySelector('.js-lightbox');
const imgRef = document.querySelector('.lightbox__image');

lightBoxRef.addEventListener('click', onCloseBtnClick);

function setAtributesOnImg(atribut, value) {
  imgRef.setAttribute(atribut, value);
};

function cleanAtributes() {
  lightBoxRef.classList.remove('is-open');
  setAtributesOnImg('src', '');
  setAtributesOnImg('alt', '');
};

function onCloseBtnClick(event) {
  if (event.target.nodeName === 'IMG') {
    return;
  };
  cleanAtributes();
};