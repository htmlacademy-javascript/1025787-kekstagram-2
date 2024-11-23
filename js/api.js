const getData = () => fetch(
  'https://31.javascript.htmlacadem.pro/kekstagram/data')
  .then((response) => response.json());

export { getData };
