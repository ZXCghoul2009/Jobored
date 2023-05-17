import { ButtonProps } from '@/UI/Buttons/interfaces';

import '../../fields.css';
import styles from './ButtonMedium.module.css';

export const ButtonMedium = ({
  children,
  onClick,
  type,
  variant,
  data_elem
}: ButtonProps): JSX.Element => (
  <button
    data-elem={data_elem}
    type={type}
    className={variant === '2' ? styles.button_variant2 : styles.button_variant1}
    onClick={onClick}
  >
    {children}
  </button>
);
