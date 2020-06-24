import axios from 'axios';

const api = axios.create({
  baseURL: `https://app.wegotrip.com/api/v2/search/`,
  timeout: 1000 * 5
});

export default api;
