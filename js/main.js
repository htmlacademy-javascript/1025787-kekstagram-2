// Больше не надо создавать миниатюры из списка фотографий и описаний, т.к. беру их с сервера:
// import { descriptionPhoto } from './create-array-miniatures.js';

import { renderCards } from './get-miniatures.js';
import { photoUpload, hideForm } from './photo-upload-form.js';

// Функцию использую при получении данных с сервера:
// renderCards(descriptionPhoto);

// Получаю данные с сервера:
fetch('https://31.javascript.htmlacadem.pro/kekstagram/data')
  .then((response) => response.json())
  .then((miniatures) => {
    renderCards(miniatures);
  });

// Проверяю валидность формы и если всё хорошо, то отправляю на сервер:
photoUpload(hideForm);
