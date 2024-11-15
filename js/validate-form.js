const imgForm = document.querySelector('.img-upload__form');

const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_SYMBOLS = 20;
const COMMENT_MAX_SYMBOLS = 140;

const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

let errorMessage = '';

const error = () => errorMessage;

const isHashtagValid = (value) => {
  errorMessage = '';
  // Приводит к нижнему регистру и убирает пробелы по бокам
  const hastagsText = value.toLowerCase().trim();
  // Проверяет отсутствие хэштегов
  if (hastagsText.length === 0) {
    return true;
  }
  // Создает массив хэштегов
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
      error: `Длина хэштега не может быть больше${ HASHTAG_MAX_SYMBOLS }символов`
    },
    {
      check: hastagsArray.length > HASHTAG_MAX_COUNT,
      error: `Максимальная количество хэштегов - ${ HASHTAG_MAX_COUNT }`
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
    }
    return !isInvalid;
  });
};

// // Проверяет валидность хэштега
// const validateHashtagText = (array) => {
//   const hashtags = array.split(' ');
//   let element;
//   hashtags.forEach((hashtag) => {
//     element = /^#[a-zа-я0-9]{1,19}$/i.test(hashtag);
//   });
//   return element;
// };

// // Проверяет количество хэштегов
// const validateHashtagCount = (array) => {
//   const hashtags = array.split(' ');
//   return hashtags.length <= HASHTAG_COUNT;
// };

// // Проверяет повторение хэштегов
// const validateHashtagRepeat = (array) => {
//   const hashtags = array.split(' ');
//   hashtags.forEach((hashtag) => hashtag.toLowerCase());
//   const duplicates = [];
//   for (let i = 0; i < hashtags.length; i++) {
//     for (let j = i + 1; j < hashtags.length; j++) {
//       if (hashtags[i] === hashtags[j] && !duplicates.includes(hashtags[i])) {
//         duplicates.push(hashtags[i]);
//       }
//     }
//   }
//   return duplicates.length === 0;
// };

// pristine.addValidator(
//   imgForm.querySelector('.text__hashtags'),
//   validateHashtagText,
//   'Неправильный хэштег'
// );

// pristine.addValidator(
//   imgForm.querySelector('.text__hashtags'),
//   validateHashtagCount,
//   'Превышено максимальное количество хэштегов'
// );

// pristine.addValidator(
//   imgForm.querySelector('.text__hashtags'),
//   validateHashtagRepeat,
//   'Хэштеги не должны повторяться'
// );

pristine.addValidator(
  imgForm.querySelector('.text__hashtags'),
  isHashtagValid,
  error
);

// Проверяет количество симполов в комментарии
const validateComment = (value) => {
  if (value.length === 0) {
    return true;
  }
  return value.length < COMMENT_MAX_SYMBOLS;
};

pristine.addValidator(
  imgForm.querySelector('.text__description'),
  validateComment,
  `Длина комментария не может быть больше${ COMMENT_MAX_SYMBOLS }символов`
);

const validateForm = () => {
  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export { validateForm };
