import { DEFAULT_SCALE, MAX_SCALE, MIN_SCALE, SCALE_FACTOR, SCALE_STEP } from './constants.js';

const scale = document.querySelector('.img-upload__scale');
const scaleControl = scale.querySelector('.scale__control--value');
const buttonSmaller = scale.querySelector('.scale__control--smaller');
const buttonBigger = scale.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');

const getSmaller = () => {
  if (parseFloat(scaleControl.value) > MIN_SCALE) {
    scaleControl.value = `${parseFloat(scaleControl.value) - SCALE_STEP}%`;
    imagePreview.style.transform = `scale(${parseFloat(scaleControl.value) * SCALE_FACTOR})`;
  }
};

const getBigger = () => {
  if (parseFloat(scaleControl.value) < MAX_SCALE) {
    scaleControl.value = `${parseFloat(scaleControl.value) + SCALE_STEP}%`;
    imagePreview.style.transform = `scale(${parseFloat(scaleControl.value) * SCALE_FACTOR})`;
  }
};

export const changeScale = () => {
  buttonSmaller.addEventListener('click', getSmaller);
  buttonBigger.addEventListener('click', getBigger);
};

export const reset = () => {
  scaleControl.value = `${DEFAULT_SCALE}%`;
  imagePreview.style.transform = `scale(${MAX_SCALE * SCALE_FACTOR})`;
};
