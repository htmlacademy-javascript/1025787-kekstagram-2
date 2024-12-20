import { FILTERS, SORTFUNC, ACTIVE_BUTTON, MAX_PHOTO_COUNT } from './constants.js';
import { debounce } from './util.js';
import { renderCards } from './get-miniatures.js';

const filterElement = document.querySelector('.img-filters');

let currentFilter = FILTERS.DEFAULT;
let pictures = [];

const debounceRender = debounce(renderCards);

function onFilterChange(evt) {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON}`);
  if (!targetButton.matches('button')) {
    return;
  }
  if (activeButton === targetButton) {
    return;
  }
  activeButton.classList.toggle(ACTIVE_BUTTON);
  targetButton.classList.toggle(ACTIVE_BUTTON);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
}

function applyFilter() {
  let filteredPictures = [];
  if (currentFilter === FILTERS.DEFAULT) {
    filteredPictures = pictures;
  } else if (currentFilter === FILTERS.RANDOM) {
    filteredPictures = pictures.toSorted(SORTFUNC.GET_RANDOM_NUMBER).slice(0, MAX_PHOTO_COUNT);
  } else if (currentFilter === FILTERS.DISCUSSED) {
    filteredPictures = pictures.toSorted(SORTFUNC.GET_DISCUSSED);
  }

  debounceRender(filteredPictures);
}

export const filtersActive = () => {
  filterElement.classList.remove('img-filters--inactive');
};

export const chooseFilter = (picturesData) => {
  filterElement.addEventListener('click', onFilterChange);
  pictures = picturesData;
};
