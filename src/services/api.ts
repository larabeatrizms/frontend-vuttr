import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-app-vuttr.herokuapp.com',
});

export default api;
