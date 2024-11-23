import { renderCards, shownDataError } from './get-miniatures.js';
import { photoUpload, hideForm } from './photo-upload-form.js';
import { getData } from './api.js';

// Получаю данные с сервера:
getData()
  .then((miniatures) => {
    renderCards(miniatures);
  })
  .catch(() => shownDataError());

// Проверяю валидность формы и если всё хорошо, то отправляю на сервер:
photoUpload(hideForm);
