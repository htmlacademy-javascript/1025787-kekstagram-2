import { openBigPicture } from './get-big-picture.js';

const miniaturesElement = document.querySelectorAll('.picture');

// Открывает большую картинку по клику на миниатюру
miniaturesElement.forEach((miniature) => {
  miniature.addEventListener('click', (evt) => {
    evt.preventDefault();
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture) {
      openBigPicture(currentPicture.dataset.id);
    }
  });
});
