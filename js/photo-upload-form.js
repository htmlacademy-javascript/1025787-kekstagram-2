import { isEscapeKey } from './util.js';

const imgForm = document.querySelector('.img-upload__form');
const imgUpload = document.querySelector('.img-upload__input');
const photoEditing = document.querySelector('.img-upload__overlay');
const cancel = document.querySelector('.img-upload__cancel');

const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
});

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
  imgUpload.value = '';
};

const validateHashtag = (value) => {
  const hashtags = value.split(' ');
  let element;
  hashtags.forEach((hashtag) => {
    element = /^#[a-zа-я0-9]{1,19}$/i.test(hashtag);
  });
  return element === true && hashtags.length <= 5;
};

const getErrorMessage = (value) => {
  const hashtags = value.split(' ');
  let element;
  hashtags.forEach((hashtag) => {
    element = /^#[a-zа-я0-9]{1,19}$/i.test(hashtag);
  });
  if (element === false) {
    return 'Неправильный хэштег';
  }
  if (hashtags.length > 5) {
    return 'Превышено максимальное количество хэштегов - 5';
  }
};

pristine.addValidator(
  imgForm.querySelector('.text__hashtags'),
  validateHashtag,
  getErrorMessage
);

const photoUpload = () => {
  imgUpload.addEventListener('change', shownForm);

  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export { photoUpload };

photoUpload();
