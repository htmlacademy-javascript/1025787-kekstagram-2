import { isEscapeKey } from './util.js';

const imgUpload = document.querySelector('.img-upload__input');
const photoEditing = document.querySelector('.img-upload__overlay');
const cancel = document.querySelector('.img-upload__cancel');

// Обработчик нажатия на крестик
function onCloseForm(evt) {
  evt.preventDefault();
  // eslint-disable-next-line no-use-before-define
  hideForm();
}

// Обработчик нажатия клавиши ESC
function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    hideForm();
  }
}

// Окрывает форму редактирования фото
const shownForm = () => {
  photoEditing.classList.remove('hidden');
  document.body.classList.add('modal-open');
  cancel.addEventListener('click', onCloseForm);
  document.addEventListener('keydown', onDocumentKeydown);
};

// Скрывает форму редактирования фото
const hideForm = () => {
  photoEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');
  cancel.removeEventListener('click', onCloseForm);
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUpload.removeEventListener('change', shownForm);
};

const photoUpload = () => {
  imgUpload.addEventListener('change', shownForm);
};

export { photoUpload };
