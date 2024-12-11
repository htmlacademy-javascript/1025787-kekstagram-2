import { BASE_URL, Route } from './constants.js';

const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => response.json());

const sendData = (body) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  }
);

export { getData, sendData };
