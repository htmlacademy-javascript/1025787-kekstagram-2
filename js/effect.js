const imagePreview = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.effect-level');
const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');

noUiSlider.create(effectSlider, {
  range: {
    'min': 0,
    'max': 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

effectSlider.noUiSlider.on('update', () => {
  effectValue.value = effectSlider.noUiSlider.get();
});

const effects = [
  {
    id: '#effect-none',
    filter: 'none',
  },
  {
    id: '#effect-chrome',
    filter: 'grayscale(3)',
  },
  {
    id: '#effect-sepia',
    filter: 'sepia(1)',
  },
  {
    id: '#effect-marvin',
    filter: 'invert(100%)',
  },
  {
    id: '#effect-phobos',
    filter: 'blur(3px)',
  },
  {
    id: '#effect-heat',
    filter: 'brightness(3)',
  },
];

effectLevel.classList.add('hidden');

effectsList.addEventListener('click', (evt) => {
  effects.forEach((effect) => {
    const item = evt.target.closest(effect.id);
    if (item) {
      effectsList.querySelector('#effect-none').checked = false;
      effectsList.querySelector(effect.id).checked = true;
      imagePreview.style.filter = effect.filter;
      if (effectsList.querySelector('#effect-none').checked) {
        effectLevel.classList.add('hidden');
      } else {
        effectLevel.classList.remove('hidden');
      }
    }
  });
});
