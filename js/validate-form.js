const imgForm = document.querySelector('.img-upload__form');
const button = imgForm.querySelector('.img-upload__submit');

const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_SYMBOLS = 20;
const COMMENT_MAX_SYMBOLS = 140;

export const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

// Сообщение об ошибке
let errorMessage = '';
const error = () => errorMessage;

// Проверяет валидность хэштегов
const isHashtagValid = (value) => {
  // Очищает сообщение об ошибке
  errorMessage = '';
  // Приводит к нижнему регистру и убирает пробелы по бокам
  const hastagsText = value.toLowerCase().trim();
  // Проверяет отсутствие хэштегов
  if (hastagsText.length === 0) {
    button.disabled = false;
    return true;
  }
  // Создает массив хэштегов из данных поля
  const hastagsArray = value.split(' ');
  // Создаёт правила показа ошибок
  const rules = [
    {
      check: hastagsArray.some((item) => item === '#'),
      error: 'Хэштег не может состоять только из решётки'
    },
    {
      check: hastagsArray.some((item) => item.slice(1).includes('#')),
      error: 'Хэштеги разделяются пробелами'
    },
    {
      check: hastagsArray.some((item) => item[0] !== '#'),
      error: 'Хэштег должен начинаться с символа &#35;'
    },
    {
      check: hastagsArray.some((item, num, array) => array.includes(item, num + 1)),
      error: 'Хэштеги не должны повторяться'
    },
    {
      check: hastagsArray.some((item) => item.length > HASHTAG_MAX_SYMBOLS),
      error: `Длина хэштега не может быть больше ${HASHTAG_MAX_SYMBOLS} символов`
    },
    {
      check: hastagsArray.length > HASHTAG_MAX_COUNT,
      error: `Максимальная количество хэштегов - ${HASHTAG_MAX_COUNT}`
    },
    {
      check: hastagsArray.some((item) => !/^#[a-zа-я0-9]{1,19}$/i.test(item)),
      error: 'Хэштег сожержит недопустимые символы'
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
      button.disabled = true;
    }
    if (!isInvalid) {
      button.disabled = false;
      return !isInvalid;
    }
  });
};

pristine.addValidator(
  imgForm.querySelector('.text__hashtags'),
  isHashtagValid,
  error
);

// Проверяет количество символов в комментарии
const isCommentValid = (value) => {
  if (value.length === 0) {
    return true;
  }
  return value.length < COMMENT_MAX_SYMBOLS;
};

pristine.addValidator(
  imgForm.querySelector('.text__description'),
  isCommentValid,
  `Длина комментария не может быть больше ${COMMENT_MAX_SYMBOLS} символов`
);
