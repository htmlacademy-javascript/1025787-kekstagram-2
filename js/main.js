import { renderCards, shownDataError } from './get-miniatures.js';
import { photoUpload } from './form.js';
import { getData } from './api.js';
import { filtersActive, chooseFilter } from './filters.js';

getData()
  .then((miniatures) => {
    renderCards(miniatures);
    filtersActive();
    chooseFilter(miniatures);
  })
  .catch(() => shownDataError());

photoUpload();
