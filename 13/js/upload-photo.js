import { shownToastError } from './get-miniatures.js';
import { shownForm } from './form.js';

const FILE_TYPES = ['.jpg', '.jpeg', '.png', '.gif'];

const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

export const onFileInputChange = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const url = URL.createObjectURL(file);
    preview.src = url;
    effectsPreview.forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  } else {
    shownToastError('Неверный тип файла');
    return;
  }

  shownForm();
};
