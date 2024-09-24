// Функции из этого файла не используются в проекте, но пока лежат тут для тренировки :)

//Функция для проверки длины строки
const checksLengthString = (string, maxLength) => string.length <= maxLength;

const lengthString = checksLengthString('в этой строке 25 символов', 26);

console.log(lengthString);

//Функция для проверки, является ли строка палиндромом
const checkPalindrome = (string) => {
  const stringNormalize = string.replaceAll(' ', '').toLowerCase();
  let stringReverse = '';
  for (let i = stringNormalize.length - 1; i >= 0; i--) {
    stringReverse += stringNormalize.at(i);
  }
  return stringReverse === stringNormalize;
};
const palindrome = checkPalindrome('Лёша на полке клопа нашёл ');

console.log(palindrome);

//Функция для извлечения чисел
const extractNumbers = (string) => {
  string = string.toString();

  let stringNumbers = '';

  for (let i = 0; i < string.length; i++) {
    const number = parseInt(string.at(i), 10);
    if (!Number.isNaN(number)) {
      stringNumbers += number;
    }
  }
  return parseInt(stringNumbers, 10);
};
const numbers = extractNumbers('f');
const numbers1 = extractNumbers('-1asdasd.24');
console.log(numbers);
console.log(numbers1);
