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

const DESCRIBES_PHOTO_COUNT = 25;

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

//Генерирует уникальный идентификатор
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateId = createRandomId(1, 25);
const generateUrl = createRandomId(1, 25);
const generateCommentId = createIdGenerator();

// Для выбора одного случайного элемента из списка
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Выводит сообщения
const createMessage = () => {
  const message = [];
  for (let i = 0; i < getRandomInteger(1, 2); i++) {
    const nextMessage = getRandomArrayElement(MESSAGES);
    message.push(nextMessage);
  }
  return message.join(' ');
};

// Выводит комментарии
const getCommentsPhoto = () => ({
  id: generateCommentId(),
  avatar: `img/avatar${ getRandomInteger(1, 6) }.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createComments = () => {
  const comments = [];
  for (let i = 0; i < getRandomInteger(0, 30); i++) {
    const nextComment = getCommentsPhoto();
    comments.push(nextComment);
  }
  return comments;
};

// Выводит фото с описанием и комментариями
const getDescriptionPhoto = () => ({
  id: generateId(),
  url: `photos/${ generateUrl() }.jpg`,
  description: 'Здесь должно быть описание фотографии',
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

const descriptionPhoto = Array.from({length: DESCRIBES_PHOTO_COUNT}, getDescriptionPhoto);

console.log(descriptionPhoto);
