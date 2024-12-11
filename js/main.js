import { renderCards, shownDataError } from './get-miniatures.js';
import { photoUpload } from './form.js';
import { getData } from './api.js';
import { filtersActive, configFilter } from './filters.js';

getData()
  .then((miniatures) => {
    renderCards(miniatures);
    filtersActive();
    configFilter(miniatures);
  })
  .catch(() => shownDataError());

photoUpload();
