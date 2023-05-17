import { EmptyState } from '@/components';

import styles from './NotFoundPage.module.css';

export const NotFoundPage = (): JSX.Element => (
  <div className={styles.page}>
    <EmptyState title='Такой страницы нету :(' />
  </div>
);
