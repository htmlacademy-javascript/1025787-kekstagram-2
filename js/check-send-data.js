import { isEscapeKey } from './util.js';

const templateMessageSuccess = document.querySelector('#success').content.querySelector('.success');
const templateMessageError = document.querySelector('#error').content.querySelector('.error');

const controlMessage = {
  SUCCESS: '.success',
  ERROR: '.error'
};

// Обработчик нажатия на кнопку закрытия окна
const onCloseButton = (evt) => {
  evt.preventDefault();
  closeMessage();
};

// Обработчик нажатия клавиши ESC
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

// Обработчик нажатия вокруг окна
const onDocumentClick = (evt) => {
  evt.preventDefault();
  let element;
  if (document.querySelector(controlMessage.SUCCESS)) {
    element = document.querySelector(controlMessage.SUCCESS).children;
  } else {
    element = document.querySelector(controlMessage.ERROR).children;
  }
  if (!evt.composedPath().includes(element)) {
    closeMessage();
  }
};

// Добавляет фрагмент (окошко) с уведомлением об успешной отправке формы
const successElement = () => {
  const newElement = templateMessageSuccess.cloneNode(true);
  const bodyFragment = document.createDocumentFragment();
  bodyFragment.append(newElement);
  document.body.appendChild(bodyFragment);
};

// Добавляет фрагмент (окошко) с уведомлением об ошибке при отправке формы
const errorElement = () => {
  const newElement = templateMessageError.cloneNode(true);
  const bodyFragment = document.createDocumentFragment();
  bodyFragment.append(newElement);
  document.body.appendChild(bodyFragment);
};

// Закрывает окошко
function closeMessage () {
  if (document.querySelector(controlMessage.SUCCESS)) {
    document.querySelector(controlMessage.SUCCESS).remove();
  } else {
    document.querySelector(controlMessage.ERROR).remove();
  }
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
}

// Слушатели
const listeners = () => {
  if (document.querySelector(controlMessage.SUCCESS)) {
    document.querySelector('.success__button').addEventListener('click', onCloseButton);
  } else {
    document.querySelector('.error__button').addEventListener('click', onCloseButton);
  }

  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};

// Показывает окошко об успешной отправке формы и добавляет слушателей для закрытия окошка
const shownSuccess = () => {
  successElement();
  listeners();
};

// Показывает окошко об успешной отправке формы и добавляет слушателей для закрытия окошка
const shownError = () => {
  errorElement();
  listeners();
};

export { shownSuccess, shownError };
