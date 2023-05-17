import {NavLink} from 'react-router-dom';
import {joboredIcon} from '@/static/images';

import styles from './Header.module.css';

export const Header = (): JSX.Element => (
    <header className={styles.header}>
      <div className={styles.header_icon}>
        <img src={joboredIcon.default} alt='Jobored icon'/>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
                to='/'
                className={({isActive}) => (isActive ? styles.isActive : styles.isInactive)}
            >
              Поиск Вакансий
            </NavLink>
          </li>
          <li>
            <NavLink
                to='/favorite'
                className={({isActive}) => (isActive ? styles.isActive : styles.isInactive)}
            >
              Избранное
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
);
