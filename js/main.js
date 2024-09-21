const DESCRIPTIONS = [
  'Рассвет',
  'Закат',
  'Розочка',
  'Море',
  'Первый снег',
  'Тюльпан',
  'Помидор',
  'Тыква',
  'Осенний лес',
  'Бегемот',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Александр',
  'Сергей',
  'Алексей',
  'Дмитрий',
  'Андрей',
  'Елена',
  'Ольга',
  'Мария',
  'Наталья',
  'Екатерина',
];

const DESCRIBES_PHOTO_COUNT = 25; // Количество фото и описаний
const NUMBER_OF_MESSAGES = 2; // Количество предложений в комментари
const NUMBER_OF_AVATARS = 6; // Количество аватарок
const MAX_NUMBER_OF_COMMENTS = 30; // Максимальное количество комментариев
const MIN_NUMBER_OF_LIKES = 15; // Минимальное количество лайков
const MAX_NUMBER_OF_LIKES = 200; // Максимальное количество лайков

// Генерирует случайное целое число в заданном диапазоне
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Генерирует случайное неповторяющееся число в заданном диапазоне
const createRandomId = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max }`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Счетчик от 1
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => ++lastGeneratedId;
};

const generateId = createRandomId(1, DESCRIBES_PHOTO_COUNT);
const generateUrl = createRandomId(1, DESCRIBES_PHOTO_COUNT);

const generateCommentId = createIdGenerator();

// Для выбора одного случайного элемента из списка
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Выводит сообщения (одно или два предложения из списка)
const createMessage = () => {
  const message = [];
  for (let i = 0; i < getRandomInteger(1, NUMBER_OF_MESSAGES); i++) {
    const nextMessage = getRandomArrayElement(MESSAGES);
    message.push(nextMessage);
  }
  return message.join(' ');
};

// Выводит комментарии
const getCommentsPhoto = () => ({
  id: generateCommentId(),
  avatar: `img/avatar${ getRandomInteger(1, NUMBER_OF_AVATARS) }.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

// Генерирует массив комментариев
const createComments = () => {
  const comments = [];
  for (let i = 0; i < getRandomInteger(0, MAX_NUMBER_OF_COMMENTS); i++) {
    const nextComment = getCommentsPhoto();
    comments.push(nextComment);
  }
  return comments;
};

// Выводит фото с описанием и комментариями
const getDescriptionPhoto = () => ({
  id: generateId(),
  url: `photos/${ generateUrl() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_NUMBER_OF_LIKES, MAX_NUMBER_OF_LIKES),
  comments: createComments(),
});

const descriptionPhoto = Array.from({length: DESCRIBES_PHOTO_COUNT}, getDescriptionPhoto);

console.log(descriptionPhoto);
