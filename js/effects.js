import { EffectsSettings, EFFECTS } from './effects-constants.js';

const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.effect-level');
const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');

let currentFilter = EFFECTS.DEFAULT;

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const renderImage = (value) => {
  if (currentFilter !== EFFECTS.DEFAULT) {
    const { style, unit } = EffectsSettings[currentFilter];
    imagePreview.style.filter = `${style}(${value}${unit})`;
  } else {
    imagePreview.style.filter = '';
  }
};

effectSlider.noUiSlider.on('update', () => {
  const value = effectSlider.noUiSlider.get();
  effectValue.value = value;
  renderImage(value);
});

const renderSlider = () => {
  if (currentFilter !== EFFECTS.DEFAULT) {
    effectLevel.classList.remove('hidden');
  } else {
    effectLevel.classList.add('hidden');
  }
};

const updateSlider = ({ range, step }) => {
  effectSlider.noUiSlider.updateOptions({
    range,
    step,
    start: range.max
  });
  renderSlider();
};

effectsList.addEventListener('change', ({ target }) => {
  currentFilter = target.value;
  updateSlider(EffectsSettings[currentFilter]);
});

export const reset = () => {
  currentFilter = EFFECTS.DEFAULT;
  updateSlider(EffectsSettings[currentFilter]);
};

reset();
