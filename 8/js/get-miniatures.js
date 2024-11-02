import { descriptionPhoto } from './create-array-miniatures.js';

const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

// Наполняет шаблон данными для миниатюр
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

// Добавляет миниатюры в разметку
descriptionPhoto.forEach((photo) => {
  const miniatureElement = createMiniatureElement(photo);
  containerFragment.appendChild(miniatureElement);
});

container.appendChild(containerFragment);
