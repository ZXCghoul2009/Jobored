import React, {useEffect} from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { RootLayout } from './components/Layouts';
import { FavoritePage, NotFoundPage, SearchPage, VacancyPage } from '@/pages/index';
import {useAppDispatch} from "./store";
import {loginUser} from "./store/Actions/actionCreators";

import './App.css';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<SearchPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='/vacancy/:id' element={<VacancyPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);
const queryClient = new QueryClient();
export const App = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('access');
  useEffect(()=> {
    if(!token) {
      dispatch(loginUser())
    }
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
  );
};
