
import axios from 'axios';
import AuthService from 'src/components/App/services/auth.service';

const BASE_URL = 'http://localhost:3000/';

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(async (config) => {
  const token = AuthService.getToken();

  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }

  return config;
});
