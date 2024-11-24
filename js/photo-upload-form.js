import { setUserFormSubmit } from './validate-form.js';
import { isEscapeKey } from './util.js';
import { changeScale } from './scale.js';
import {reset as resetFilter} from './effect.js';

const imgForm = document.querySelector('.img-upload__form');

const imgUpload = imgForm.querySelector('.img-upload__input');
const photoEditing = imgForm.querySelector('.img-upload__overlay');
const cancel = imgForm.querySelector('.img-upload__cancel');

const fieldHashtags = imgForm.querySelector('.text__hashtags');
const fieldComment = imgForm.querySelector('.text__description');

// Обработчик нажатия на крестик
const onCloseForm = (evt) => {
  evt.preventDefault();
  hideForm();
};

// Обработчик нажатия клавиши ESC
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === fieldHashtags || document.activeElement === fieldComment || document.querySelector('.error')) {
      evt.stopPropagation();
    } else {
      hideForm();
    }
  }
};

// Окрывает форму редактирования фото
const shownForm = () => {
  photoEditing.classList.remove('hidden');
  document.body.classList.add('modal-open');
  cancel.addEventListener('click', onCloseForm);
  document.addEventListener('keydown', onDocumentKeydown);
  changeScale();
};

// Скрывает форму редактирования фото
function hideForm() {
  photoEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');
  cancel.removeEventListener('click', onCloseForm);
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUpload.value = '';
  imgForm.reset();
  resetFilter();
}

const photoUpload = () => {
  imgUpload.addEventListener('change', shownForm);
  setUserFormSubmit(hideForm);
};

export { photoUpload };
