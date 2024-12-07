import { isEscapeKey } from './util.js';

const templateMessageSuccess = document.querySelector('#success').content.querySelector('.success');
const templateMessageError = document.querySelector('#error').content.querySelector('.error');
const body = document.body;

const templates = {
  success: templateMessageSuccess,
  error: templateMessageError
};

export const showPopup = (type) => {
  const newPopup = templates[type].cloneNode(true);

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      newPopup.remove();
    }
  };

  newPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      newPopup.remove();
      document.removeEventListener('keydown', onDocumentKeydown, { once:true });
    }
  });

  document.addEventListener('keydown', onDocumentKeydown, { once:true });

  body.append(newPopup);
};
