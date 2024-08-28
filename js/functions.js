//Функция для проверки длины строки
const checksLengthString = (string, maxLength) => {
  const result = (string.length <= maxLength);
  return result;
};

const lengthString = checksLengthString('в этой строке 25 символов', 26);
console.log(lengthString);

//Функция для проверки, является ли строка палиндромом
const checkPalindrome = (string) => {
  const stringNormalize = string.replaceAll(' ', '').toLowerCase();
  let stringReverse = '';
  for (let i = stringNormalize.length - 1; i >= 0; i--) {
    stringReverse += stringNormalize.at(i);
  }
  const result = (stringReverse === stringNormalize);
  return result;
};
const palindrome = checkPalindrome('Лёша на полке клопа нашёл ');
console.log(palindrome);

//Функция для извлечения чисел
const extractNumbers = (string) => {
  string = string.toString();

  let stringNumbers = '';

  for (let i = 0; i < string.length; i++) {
    const number = parseInt(string.at(i), 10);
    if (Number.isNaN(number)) {
      stringNumbers += '';
    } else {
      stringNumbers += number;
    }
  }
  if (parseInt(stringNumbers, 10)) {
    return Number(stringNumbers);
  } else {
    return NaN;
  }
};
const numbers = extractNumbers(-1.24);
console.log(numbers);
