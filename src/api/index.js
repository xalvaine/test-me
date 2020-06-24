import axios from 'axios';

const api = axios.create({
  baseURL: `https://app.wegotrip.com/api/v2/search/`,
  timeout: 10000
});

export default api;
