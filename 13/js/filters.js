import { FILTERS, SORTFUNC } from './constants.js';
import { debounce } from './util.js';
import { renderCards } from './get-miniatures.js';

const filterElement = document.querySelector('.img-filters');
const ACTIVE_BUTTON = 'img-filters__button--active';
const MAX_PHOTO_COUNT = 10;

let currentFilter = FILTERS.DEFAULT;
let pictures = [];

const debounceRender = debounce(renderCards);

function onFilterChange (evt) {
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

function applyFilter () {
  let filteredPictures = [];
  if (currentFilter === FILTERS.DEFAULT) {
    filteredPictures = pictures;
  } else if (currentFilter === FILTERS.RANDOM) {
    filteredPictures = pictures.toSorted(SORTFUNC.RANDOM).slice(0, MAX_PHOTO_COUNT);
  } else if (currentFilter === FILTERS.DISCUSSED) {
    filteredPictures = pictures.toSorted(SORTFUNC.DISCUSSED);
  }

  debounceRender(filteredPictures);
}

export const filtersActive = () => {
  filterElement.classList.remove('img-filters--inactive');
};

export const configFilter = (picturesData) => {
  filterElement.addEventListener('click', onFilterChange);
  pictures = picturesData;
};
