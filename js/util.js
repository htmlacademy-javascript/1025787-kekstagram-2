// Нажата клавиша ESC
export const isEscapeKey = (evt) => evt.key === 'Escape';

// Устраняет дребезг
export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
