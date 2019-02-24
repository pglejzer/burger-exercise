import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-e5ae9.firebaseio.com/'
});

export default instance;