import { renderCards, shownDataError } from './get-miniatures.js';
import { photoUpload } from './photo-upload-form.js';
import { getData } from './api.js';

// Получает данные с сервера:
getData()
  .then((miniatures) => {
    renderCards(miniatures);
  })
  .catch(() => shownDataError());

// Проверяет валидность формы и если всё хорошо, то отправляет на сервер:
photoUpload();
