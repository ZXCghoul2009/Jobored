import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Header } from '../Header/Header';

export const RootLayout = (): JSX.Element => (
  <>
    <Header />
    <main className='content'>
      <Outlet />
      <ScrollRestoration />
    </main>
  </>
);
