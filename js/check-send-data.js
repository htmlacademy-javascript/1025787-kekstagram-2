import { isEscapeKey } from './util.js';

const templateMessageSuccess = document.querySelector('#success').content.querySelector('.success');

// Обработчик нажатия на кнопку "Круто!"
const onCloseSuccess = (evt) => {
  evt.preventDefault();
  closeSuccess();
};

// Обработчик нажатия клавиши ESC
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccess();
  }
};

// Обработчик нажатия вокруг окна
const onDocumentClick = (evt) => {
  evt.preventDefault();
  const element = document.querySelector('.success__inner');
  if (!evt.composedPath().includes(element)) {
    closeSuccess();
  }
};

const successElement = () => {
  const newElement = templateMessageSuccess.cloneNode(true);
  const bodyFragment = document.createDocumentFragment();
  bodyFragment.append(newElement);
  document.body.appendChild(bodyFragment);
};

function closeSuccess () {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
}

const chownSuccess = () => {
  successElement();

  document.querySelector('.success__button').addEventListener('click', onCloseSuccess);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};

export { chownSuccess };
