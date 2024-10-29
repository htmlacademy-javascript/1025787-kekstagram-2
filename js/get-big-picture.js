import './get-miniatures.js';
import { isEscapeKey } from './util.js';
import { descriptionPhoto } from './create-array-miniatures.js';
import { openComments } from './open-comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
const likesCount = bigPictureElement.querySelector('.likes-count');
const caption = bigPictureElement.querySelector('.social__caption');

const buttonCancel = document.querySelector('.big-picture__cancel');

// Обработчик нажатия на крестик
const onCloseBigPictureClick = (evt) => {
  evt.preventDefault();
  // eslint-disable-next-line no-use-before-define
  closeBigPicture();
};
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
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  buttonCancel.removeEventListener('click', closeBigPicture);
};

// Функция для открытия большой картинки
const openBigPicture = (id) => {
  const currentPhoto = descriptionPhoto.find((photo) => photo.id === Number(id));

  bigPictureImg.src = currentPhoto.url;
  bigPictureImg.alt = currentPhoto.description;
  caption.textContent = currentPhoto.description;
  likesCount.textContent = currentPhoto.likes;

  openComments(id);

  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  buttonCancel.addEventListener('click', onCloseBigPictureClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

export { openBigPicture };
