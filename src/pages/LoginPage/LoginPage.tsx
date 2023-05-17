import { useState } from 'react';
import { useAppDispatch } from '../../store';
import { loginUser } from '../../store/Actions/actionCreators';
import { ButtonMedium } from '@/UI/Buttons';

import styles from './LoginPage.module.css';

export const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const submitFormHandler = (event: any) => {
    event.preventDefault();
    const data = {
      login,
      password,
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
      hr: import.meta.env.VITE_CLIENT_HR
    };
    dispatch(loginUser(data)).then(()=> window.location.reload());
  };

  return (
    <div className={styles.login_page}>
      <form onSubmit={submitFormHandler} className={styles.login_form}>
        <h2>Войти</h2>
        <input
          placeholder='Логин'
          className='input'
          type='text'
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <input
          placeholder='Пароль'
          className='input'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <ButtonMedium variant='1'>Войти</ButtonMedium>
      </form>
    </div>
  );
};

