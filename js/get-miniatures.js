import { openBigPicture } from './get-big-picture.js';

const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const templateError = document.querySelector('#data-error').content.querySelector('.data-error');

const REMOVE_ERRROR_TIMER = 5000;

let localData;

const createMiniatureElement = (photo) => {
  const miniatureElement = template.cloneNode(true);

  miniatureElement.href = photo.url;
  miniatureElement.dataset.id = photo.id;

  const image = miniatureElement.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;
  miniatureElement.querySelector('.picture__likes').textContent = photo.likes;
  miniatureElement.querySelector('.picture__comments').textContent = photo.comments.length;

  return miniatureElement;
};

const clearCards = () => {
  document.querySelectorAll('.picture').forEach((item) => item.remove());
};

const renderCards = (data) => {
  clearCards();
  localData = [...data];
  const containerFragment = document.createDocumentFragment();

  data.forEach((photo) => {
    const miniatureElement = createMiniatureElement(photo);
    containerFragment.appendChild(miniatureElement);
  });

  container.appendChild(containerFragment);
};

container.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if(card){
    evt.preventDefault();
    const id = Number(card.dataset.id);
    const currentPhoto = localData.find((item) => item.id === id);
    openBigPicture(currentPhoto);
  }
});

const shownToastError = (errorMessage) => {
  const errorElement = templateError.cloneNode(true);
  document.body.appendChild(errorElement);
  if(errorMessage) {
    errorElement.querySelector('.data-error__title').textContent = errorMessage;
  }
  setTimeout(() => (errorElement.remove()), REMOVE_ERRROR_TIMER);
};

const shownDataError = () => {
  shownToastError();
};

export { renderCards, shownDataError, shownToastError };
