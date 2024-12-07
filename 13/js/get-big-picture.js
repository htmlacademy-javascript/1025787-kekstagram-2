import { isEscapeKey } from './util.js';
import { openComments, clearComments } from './open-comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
const likesCount = bigPictureElement.querySelector('.likes-count');
const caption = bigPictureElement.querySelector('.social__caption');

const buttonCancel = document.querySelector('.big-picture__cancel');

// Обработчик нажатия на крестик
const onCloseBigPictureClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

// Обработчик нажатия клавиши ESC
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

// Функция для открытия модального окна
const showModal = () => {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  buttonCancel.addEventListener('click', onCloseBigPictureClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

// Функция для скрытия модального окна
const hideModal = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  buttonCancel.removeEventListener('click', onCloseBigPictureClick);
};

// Функция для очистки комментариев и закрытия модального окна
function closeBigPicture () {
  clearComments();
  hideModal();
}

const renderModal = ({ url, description, likes, comments }) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  caption.textContent = description;
  likesCount.textContent = likes;

  openComments(comments);
};

// Функция для открытия большой картинки
const openBigPicture = (currentPhoto) => {
  renderModal(currentPhoto);
  showModal();
};

export { openBigPicture };
