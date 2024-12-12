export const EFFECTS = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

export const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

export const EffectsSettings = {
  [EFFECTS.DEFAULT]: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    unit: '',
    style: ''
  },
  [EFFECTS.CHROME]: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    unit: '',
    style: 'grayscale'
  },
  [EFFECTS.SEPIA]: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    unit: '',
    style: 'sepia'
  },
  [EFFECTS.MARVIN]: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    unit: '%',
    style: 'invert'
  },
  [EFFECTS.PHOBOS]: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    unit: 'px',
    style: 'blur'
  },
  [EFFECTS.HEAT]: {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    unit: '',
    style: 'brightness'
  },
};

export const PopupTypes = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const SORTFUNC = {
  GET_RANDOM_NUMBER: () => 0.5 - Math.random(),
  GET_DISCUSSED: (a, b) => b.comments.length - a.comments.length
};

export const ACTIVE_BUTTON = 'img-filters__button--active';

export const MAX_PHOTO_COUNT = 10;

export const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const REMOVE_ERRROR_TIMER = 5000;

export const STEP = 5;

export const SCALE_STEP = 25;
export const SCALE_FACTOR = 0.01;
export const MIN_SCALE = 25;
export const MAX_SCALE = 100;
export const DEFAULT_SCALE = MAX_SCALE;

export const FILE_TYPES = ['.jpg', '.jpeg', '.png', '.gif'];

export const HASHTAG_MAX_COUNT = 5;
export const HASHTAG_MAX_SYMBOLS = 20;
export const COMMENT_MAX_SYMBOLS = 140;
