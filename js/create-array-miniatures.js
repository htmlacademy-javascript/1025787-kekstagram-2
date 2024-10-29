import {
  getRandomInteger,
  createRandomId,
  getRandomArrayElement,
  createIdGenerator
} from './util.js';

import{ getDataArrayMiniatures } from './data.js';

const {DESCRIPTIONS, MESSAGES, NAMES} = getDataArrayMiniatures();

const DESCRIBES_PHOTO_COUNT = 25; // Количество фото и описаний
const NUMBER_OF_MESSAGES = 2; // Количество предложений в комментарии
const NUMBER_OF_AVATARS = 6; // Количество аватарок
const MAX_NUMBER_OF_COMMENTS = 30; // Максимальное количество комментариев
const MIN_NUMBER_OF_LIKES = 15; // Минимальное количество лайков
const MAX_NUMBER_OF_LIKES = 200; // Максимальное количество лайков

const generateId = createRandomId(1, DESCRIBES_PHOTO_COUNT);
const generateUrl = createRandomId(1, DESCRIBES_PHOTO_COUNT);

const generateCommentId = createIdGenerator();

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
  avatar: `img/avatar-${ getRandomInteger(1, NUMBER_OF_AVATARS) }.svg`,
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

export {descriptionPhoto};
