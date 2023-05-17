import { CrossIcon } from '@/static/Icons';
import { ResetButtonProps } from '@/UI/Buttons/interfaces';

import styles from './ResetButton.module.css';

export const ResetButton = ({ reset, children }: ResetButtonProps): JSX.Element => (
  <div className={styles.reset_button}>
    <span onClick={reset} role='presentation'>
      {children}
    </span>
    <CrossIcon />
  </div>
);
