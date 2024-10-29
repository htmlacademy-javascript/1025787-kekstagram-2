import { descriptionPhoto } from './create-array-miniatures.js';

const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');

const socialComments = document.querySelector('.social__comments');
const socialCommentsTemplate = socialComments.querySelector('.social__comment');

const socialCommentsLoader = document.querySelector('.social__comments-loader');

const countComments = 0;

const openComments = (id) => {
  const currentPhoto = descriptionPhoto.find((photo) => photo.id === Number(id));
  // Пока оставила показанные комментраии равные общему количеству комментариев
  commentShownCount.textContent = countComments;
  commentTotalCount.textContent = currentPhoto.comments.length;

  const socialCommentsFragment = document.createDocumentFragment();
  socialComments.innerHTML = '';
  currentPhoto.comments.forEach((comment) => {
    const socialComment = socialCommentsTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;

    socialCommentsFragment.appendChild(socialComment);
  });
  socialComments.appendChild(socialCommentsFragment);
};

export { openComments };
