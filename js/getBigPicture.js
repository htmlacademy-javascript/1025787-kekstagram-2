import './getMiniatures.js';
import { isEscapeKey } from './util.js';
import { descriptionPhoto } from './createArrayMiniatures.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
const likesCount = bigPictureElement.querySelector('.likes-count');
const caption = bigPictureElement.querySelector('.social__caption');

const socialComments = bigPictureElement.querySelector('.social__comments');
const socialCommentsTemplate = socialComments.querySelector('.social__comment');

const commentCount = bigPictureElement.querySelector('.social__comment-count');
const commentShownCount = commentCount.querySelector('.social__comment-shown-count');
const commentTotalCount = commentCount.querySelector('.social__comment-total-count');
const commentsLoader = bigPictureElement.querySelector('.comments-loader');

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
  const socialCommentsFragment = document.createDocumentFragment();

  bigPictureImg.src = currentPhoto.url;
  bigPictureImg.alt = currentPhoto.description;
  caption.textContent = currentPhoto.description;
  likesCount.textContent = currentPhoto.likes;
  // Пока оставила показанные комментраии равные общему количеству комментариев
  commentShownCount.textContent = currentPhoto.comments.length;
  commentTotalCount.textContent = currentPhoto.comments.length;

  socialComments.innerHTML = '';
  currentPhoto.comments.forEach((comment) => {
    const socialComment = socialCommentsTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;

    socialCommentsFragment.appendChild(socialComment);
  });
  socialComments.appendChild(socialCommentsFragment);

  bigPictureElement.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  buttonCancel.addEventListener('click', onCloseBigPictureClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

export { openBigPicture };
