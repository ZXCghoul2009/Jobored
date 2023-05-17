import { AxiosPromise } from 'axios';

import {ILoginRequest, ILoginResponse, IRefreshTokens} from './types';
// eslint-disable-next-line import/no-cycle
import { axiosInstance } from '../instance';


export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
  axiosInstance.get(import.meta.env.VITE_AUTH_LOGIN, {
    params
  });

export const refreshTokens = (params: IRefreshTokens): AxiosPromise<ILoginResponse> =>
  axiosInstance.get(import.meta.env.VITE_AUTH_REFRESH, {
    params
  } );

export const logout = (): AxiosPromise => axiosInstance.post(import.meta.env.VITE_AUTH_LOGOUT);

