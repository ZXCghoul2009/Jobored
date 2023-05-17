import React from 'react';
import { FilterIcon } from '@/static/Icons';

import styles from './FilterButton.module.css';

interface FilterButtonProps {
  onClick: () => void;
}

export const FilterButton = ({ onClick }: FilterButtonProps): JSX.Element => {
  return (
    <div onClick={onClick} className={styles.filter_button} role='presentation'>
      <FilterIcon />
    </div>
  );
};
