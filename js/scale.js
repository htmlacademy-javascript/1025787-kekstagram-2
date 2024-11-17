const STEP = 25;

const scale = document.querySelector('.img-upload__scale');
const scaleControl = scale.querySelector('.scale__control--value');
const buttonSmaller = scale.querySelector('.scale__control--smaller');
const buttonBigger = scale.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview');

const getSmaller = () => {
  if (parseFloat(scaleControl.value) > 25) {
    scaleControl.value = `${parseFloat(scaleControl.value) - STEP}%`;
    imagePreview.style.transform = `scale(${parseFloat(scaleControl.value) / 100})`;
  }
};

const getBigger = () => {
  if (parseFloat(scaleControl.value) < 100) {
    scaleControl.value = `${parseFloat(scaleControl.value) + STEP}%`;
    imagePreview.style.transform = `scale(${parseFloat(scaleControl.value) / 100})`;
  }
};

const changeScale = () => {
  buttonSmaller.addEventListener('click', getSmaller);
  buttonBigger.addEventListener('click', getBigger);
};

export { changeScale };
