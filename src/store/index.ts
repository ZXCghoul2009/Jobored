import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
// eslint-disable-next-line import/no-named-as-default
import authReducer from './Slices/authSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type IRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch