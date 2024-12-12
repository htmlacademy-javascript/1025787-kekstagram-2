import { STEP } from './constants.js';

const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const socialComments = document.querySelector('.social__comments');
const socialCommentsTemplate = socialComments.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');

socialComments.innerHTML = '';

let countComments = 0;
let arrayComments = [];

const renderStatistic = (shownElementsCount, comments) => {
  commentShownCount.textContent = shownElementsCount;
  commentTotalCount.textContent = comments.length;
};

const renderLoader = (shownElementsCount, comments) => {
  if (shownElementsCount >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const onUploadButtonClick = () => {
  const shownComments = arrayComments.slice(countComments, countComments + STEP);
  const shownCommentsLength = shownComments.length + countComments;
  const socialCommentsFragment = document.createDocumentFragment();

  shownComments.forEach(({ avatar, name, message }) => {
    const socialComment = socialCommentsTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = avatar;
    socialComment.querySelector('.social__picture').alt = name;
    socialComment.querySelector('.social__text').textContent = message;

    socialCommentsFragment.appendChild(socialComment);
  });

  socialComments.appendChild(socialCommentsFragment);

  renderStatistic(shownCommentsLength, arrayComments);
  renderLoader(shownCommentsLength, arrayComments);

  countComments += STEP;
};

const clearComments = () => {
  countComments = 0;
  socialComments.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', onUploadButtonClick);
};

const openComments = (currentPhotoComments) => {
  arrayComments = [...currentPhotoComments];
  onUploadButtonClick();
  commentsLoader.addEventListener('click', onUploadButtonClick);
};

export { openComments, clearComments };
