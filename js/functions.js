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

// Задача "Делу — время"

// Переводит время в минуты
const convertsTimeToMinutes = (time) => {
  const hourAndMinutes = time.split(':');

  for (let i = 0; i < hourAndMinutes.length; i++) {
    hourAndMinutes[i] = Number(hourAndMinutes[i]);
  }

  return hourAndMinutes[0] * 60 + hourAndMinutes[1];
};

// Проверяет, не выходит ли встреча за рамки рабочего дня
const ckeckTime = (t1, t2, t3, length) => {
  const m1 = convertsTimeToMinutes(t1);
  const m2 = convertsTimeToMinutes(t2);
  const m3 = convertsTimeToMinutes(t3);

  return (m1 <= m3 && m2 >= m3 + length);
};

console.log(ckeckTime('08:00', '17:30', '14:00', 90));
console.log(ckeckTime('8:0', '10:0', '8:0', 120));
console.log(ckeckTime('8:15', '17:15', '9:0', 495));
console.log(ckeckTime('08:00', '14:30', '14:00', 90));
console.log(ckeckTime('14:00', '17:30', '08:0', 90));
console.log(ckeckTime('8:00', '17:30', '08:00', 900));
