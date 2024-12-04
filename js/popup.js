const templateMessageSuccess = document.querySelector('#success').content.querySelector('.success');
const templateMessageError = document.querySelector('#error').content.querySelector('.error');
const body = document.body;

const templates = {
  success: templateMessageSuccess,
  error: templateMessageError
};

export const showPopup = (type) => {
  const newPopup = templates[type].cloneNode(true);

  newPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      newPopup.remove();
    }
  })
  body.append(newPopup);
}