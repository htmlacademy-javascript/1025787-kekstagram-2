import { isFormValid } from './validate-form.js';
import { isEscapeKey } from './util.js';
import { changeScale } from './scale.js';
import './effect.js';

const imgForm = document.querySelector('.img-upload__form');

const imgUpload = imgForm.querySelector('.img-upload__input');
const photoEditing = imgForm.querySelector('.img-upload__overlay');
const cancel = imgForm.querySelector('.img-upload__cancel');

const fieldHashtags = imgForm.querySelector('.text__hashtags');
const fieldComment = imgForm.querySelector('.text__description');

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
    if (document.activeElement === fieldHashtags || document.activeElement === fieldComment) {
      evt.stopPropagation();
    } else {
      imgForm.reset();
      // eslint-disable-next-line no-use-before-define
      hideForm();
    }
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
  imgUpload.value = '';
};

const photoUpload = () => {
  imgUpload.addEventListener('change', shownForm);
  changeScale();
  isFormValid();
};

export { photoUpload };
