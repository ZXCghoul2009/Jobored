import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { RootLayout } from './components/Layouts';
import { FavoritePage, LoginPage, NotFoundPage, SearchPage, VacancyPage } from '@/pages/index';

import './App.css';

const DefaultRouter = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<LoginPage />} />)
);

const AuthRouter = createBrowserRouter(
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
  const token = localStorage.getItem('access');
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={token ? AuthRouter : DefaultRouter} />
    </QueryClientProvider>
  );
};
