const getData = () => fetch(
  'https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json());

export { getData };
