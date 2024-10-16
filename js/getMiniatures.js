import { descriptionPhoto } from './createArrayMiniatures.js';

const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

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

const containerFragment = document.createDocumentFragment();

descriptionPhoto.forEach((photo) => {
  const miniatureElement = createMiniatureElement(photo);
  containerFragment.appendChild(miniatureElement);
});

container.appendChild(containerFragment);
