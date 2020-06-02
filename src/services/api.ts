import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api-app-vuttr.herokuapp.com',
});

export default api;
