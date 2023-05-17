import axios from 'axios';
import { store } from '../../store';
// eslint-disable-next-line import/no-cycle
import { logoutUser, refreshTokens } from '../../store/Actions/actionCreators';
import { IRefreshTokens } from './auth/types';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp'
  }
});

const urlsAuth = [import.meta.env.VITE_AUTH_LOGIN, import.meta.env.VITE_AUTH_CATEGORIES];

axiosInstance.interceptors.request.use(async (config) => {
  if (config.url && urlsAuth.includes(config.url)) {
    return config;
  }
  const accessToken = localStorage.getItem('access');
  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error &&
      error.response.status &&
      error.response.status === 410 &&
      error.config &&
      // eslint-disable-next-line no-underscore-dangle
      !error.config._isRetry
    ) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem('refresh');
        if (refreshToken) {
          const params: IRefreshTokens = {
            refresh_token: refreshToken,
            client_secret: `${import.meta.env.VITE_CLIENT_SECRET}`,
            client_id: `${import.meta.env.VITE_CLIENT_ID}`
          };
          await store.dispatch(refreshTokens(params));
          return await axios.request(originalRequest);
        }
      } catch (e) {
        await store.dispatch(logoutUser());
      }
    }
    throw error;
  }
);