const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const socialComments = document.querySelector('.social__comments');
const socialCommentsTemplate = socialComments.querySelector('.social__comment');

const commentsLoader = document.querySelector('.comments-loader');

socialComments.innerHTML = '';

const STEP = 5;
let countComments = 0;
let arrayComments = [];

// Отображает количество видимых комментариев
const renderStatistic = (shownElementsCount, array) => {
  commentShownCount.textContent = shownElementsCount;
  commentTotalCount.textContent = array.length;
};

// Проверяет нужно ли скрывать кнопку
const renderLoader = (shownElementsCount, array) => {
  if (shownElementsCount >= array.length) {
    commentsLoader.classList.add('hidden');
  }
};

const openNextComments = () => {
  const shownComments = arrayComments.slice(countComments, countComments + STEP);
  const shownCommentsLength = shownComments.length + countComments;
  const socialCommentsFragment = document.createDocumentFragment();

  shownComments.forEach(({avatar, name, message}) => {
    const socialComment = socialCommentsTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = avatar;
    socialComment.querySelector('.social__picture').alt = name;
    socialComment.querySelector('.social__text').textContent = message;

    socialCommentsFragment.appendChild(socialComment);
  });

  socialComments.appendChild(socialCommentsFragment);

  renderStatistic(shownCommentsLength, arrayComments);
  renderLoader(shownCommentsLength, arrayComments);

  countComments += 5;
};

const clearComments = () => {
  countComments = 0;
  socialComments.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', openNextComments);
};

const openComments = (currentPhotoComments) => {
  arrayComments = [...currentPhotoComments];
  openNextComments();
  commentsLoader.addEventListener('click', openNextComments);
};

export { openComments, clearComments };
