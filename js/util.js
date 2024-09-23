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
  return () => {
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

// Для выбора одного случайного элемента из списка
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Счетчик от 1 (прибавляет 1)
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => ++lastGeneratedId;
};

export {getRandomInteger, createRandomId, getRandomArrayElement, createIdGenerator};
