import React, {memo} from 'react';

import styles from './Arrows.module.css'

interface ArrowProps {
  onClick: ()=>void
}

export const LeftArrow = (): JSX.Element => (
  <svg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2.36699 5.00002L5.66699 1.70002L4.72399 0.757019L0.480992 5.00002L4.72399 9.24302L5.66699 8.30002L2.36699 5.00002Z'
      fill='#7B7C88'
    />
  </svg>
);
export const RightArrow = (): JSX.Element => (
  <svg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M3.63301 4.99996L0.333008 1.69996L1.27601 0.756958L5.51901 4.99996L1.27601 9.24296L0.333008 8.29996L3.63301 4.99996Z'
      fill='#7B7C88'
    />
  </svg>
);

export const ArrowUp = memo(({onClick}: ArrowProps): JSX.Element => (
  <svg className={styles.arrow} onClick={onClick} width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.50006 4.5L5.39054 1.83469C5.16584 1.6421 4.83428 1.6421 4.60959 1.83469L1.50006 4.5'
      stroke='#ACADB9'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
));
export const ArrowDown = memo(({onClick}: ArrowProps): JSX.Element => (
  <svg onClick={onClick} className={styles.arrow}  width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1.49994 1.5L4.60946 4.16531C4.83416 4.3579 5.16572 4.3579 5.39041 4.16531L8.49994 1.5'
      stroke='#ACADB9'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
));
