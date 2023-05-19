import { useNavigate } from 'react-router';
import { ButtonMedium } from '@/UI/Buttons';
import { emptyStateImage } from '@/static/images/index';

import styles from './EmptyState.module.css';

interface EmptyStateProps {
  title: string;
}

export const EmptyState = ({ title }: EmptyStateProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.empty_state}>
      <div>{emptyStateImage && <img src={emptyStateImage.default} alt='Nothing Found' />}</div>
      <p className={styles.title}>{title}</p>
      <ButtonMedium onClick={() => navigate('/')} variant='2'>
        Поиск Вакансий
      </ButtonMedium>
    </div>
  );
};
