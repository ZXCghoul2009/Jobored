import {Dispatch} from "@reduxjs/toolkit"
// eslint-disable-next-line import/no-cycle
import api from "../../utils/api/index"
import {ILoginRequest, IRefreshTokens} from "@/utils/api/auth/types"
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from '../Slices/authSlice'



export const loginUser =
    (data: ILoginRequest) =>
        async (dispatch: Dispatch<any>): Promise<void> => {
          try {
            dispatch(loginStart())
            const res = await api.auth.login(data)
            dispatch(loginSuccess(res.data.access_token))
            localStorage.setItem('access', res.data.access_token)
            localStorage.setItem('refresh', res.data.refresh_token)
          } catch (e: any) {
            dispatch(loginFailure(e.message))
          }
        }
export const refreshTokens =
    (params: IRefreshTokens) =>
        async (): Promise<void> => {
          try {
            const res = await api.auth.refreshTokens(params)
            localStorage.setItem('access', res.data.access_token)
            localStorage.setItem('refresh', res.data.refresh_token)
          } catch (e) {
                console.log(e)
          }
        }
export const logoutUser =
    () =>
        async (dispatch: Dispatch): Promise<void> => {
          try {
            await api.auth.logout()
            dispatch(logoutSuccess())
          } catch (e) {
            console.log(e)
          }
        }

