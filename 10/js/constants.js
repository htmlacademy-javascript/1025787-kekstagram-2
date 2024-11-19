export const EFFECTS = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
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
