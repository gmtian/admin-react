import axios from 'axios';
const http = axios.create();

http.defaults.baseURL = 'http://localhost:8080';
http.defaults.timeout = 10000;

http.interceptors.response.use(response => {
  return response.data;
})

export default http;