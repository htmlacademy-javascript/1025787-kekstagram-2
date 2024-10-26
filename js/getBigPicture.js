import './getMiniatures.js';
import { isEscapeKey } from './util.js';

const noScroll = document.body;

const bigPictureElement = document.querySelector('.big-picture');
const closeCommentCount = document.querySelector('.social__comment-count');
const closeCommentsLoader = document.querySelector('.comments-loader');

const buttonCancel = document.querySelector('.big-picture__cancel');

const miniaturesElement = document.querySelectorAll('.picture');

// Обработчик нажатия клавиши ESC
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeBigPicture();
  }
};

// Функция для закрытия большой картинки
const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');

  closeCommentCount.classList.remove('hidden');
  closeCommentsLoader.classList.remove('hidden');
  noScroll.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  buttonCancel.removeEventListener('click', closeBigPicture);
};

// Функция для открытия большой картинки
const openBigPicture = () => {
  bigPictureElement.classList.remove('hidden');

  closeCommentCount.classList.add('hidden');
  closeCommentsLoader.classList.add('hidden');
  noScroll.classList.add('modal-open');

  buttonCancel.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onDocumentKeydown);
};

// Открывает большую картинку по клику на миниатюру
miniaturesElement.forEach((miniature) => {
  miniature.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture();
  });
});
