import { sendData } from './api.js';
import { isEscapeKey } from './util.js';
import { changeScale, reset as resetScale } from './scale.js';
import { reset as resetFilter } from './effect.js';
import { pristine } from './validate-form.js';
import { PopupTypes, SubmitButtonText } from './constants.js';
import { showPopup } from './popup.js';
import { onFileInputChange } from './upload-photo.js';
import { reset as resetValidation } from './validate-form.js';

const imgForm = document.querySelector('.img-upload__form');

const imgUpload = imgForm.querySelector('.img-upload__input');
const photoEditing = imgForm.querySelector('.img-upload__overlay');
const cancel = imgForm.querySelector('.img-upload__cancel');

const fieldHashtags = imgForm.querySelector('.text__hashtags');
const fieldComment = imgForm.querySelector('.text__description');

const button = imgForm.querySelector('.img-upload__submit');

const onCloseForm = (evt) => {
  evt.preventDefault();
  hideForm();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === fieldHashtags || document.activeElement === fieldComment || document.querySelector('.error')) {
      evt.stopPropagation();
    } else {
      hideForm();
    }
  }
};

export const shownForm = () => {
  photoEditing.classList.remove('hidden');
  document.body.classList.add('modal-open');
  cancel.addEventListener('click', onCloseForm);
  document.addEventListener('keydown', onDocumentKeydown);
  changeScale();
};

function hideForm() {
  photoEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');
  cancel.removeEventListener('click', onCloseForm);
  document.removeEventListener('keydown', onDocumentKeydown);
  imgForm.reset();
  resetFilter();
  resetValidation();
  resetScale();
}

const blockSubmitButton = (isBlocked = true) => {
  button.disabled = isBlocked;
  button.textContent = isBlocked ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
};

export const photoUpload = () => {
  imgUpload.addEventListener('change', onFileInputChange);
  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then((response) => {
          if (!response.ok) {
            throw new Error();
          }
          hideForm();
          showPopup(PopupTypes.SUCCESS);
        })
        .catch(() => {
          showPopup(PopupTypes.ERROR);
        })
        .finally(() => {
          blockSubmitButton(false);
        });
    }
  });
};
