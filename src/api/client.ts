import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    appid: import.meta.env.VITE_API_KEY,
  },
});
