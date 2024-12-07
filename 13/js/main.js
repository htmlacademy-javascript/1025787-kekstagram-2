import { renderCards, shownDataError } from './get-miniatures.js';
import { photoUpload } from './form.js';
import { getData } from './api.js';
import { filtersActive, configFilter } from './filters.js';

// Получает данные с сервера:
getData()
  .then((miniatures) => {
    renderCards(miniatures);
    filtersActive();
    configFilter(miniatures);
  })
  .catch(() => shownDataError());

// Проверяет валидность формы и если всё хорошо, то отправляет на сервер:
photoUpload();
