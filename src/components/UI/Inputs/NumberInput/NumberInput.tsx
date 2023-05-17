import React, {useCallback} from 'react';

import '../../fields.css';
import { ArrowDown, ArrowUp } from '@/static/Icons';

import styles from './NumberInput.module.css';

interface Fields {
  payment_from: number | undefined;
  payment_to: number | undefined;
}

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  data_elem?: string;
  field?: string;
  updateFields?: (field: Partial<Fields>) => void;
}

const DefaultInputValue = ''

export const NumberInput = ({
  placeholder,
  value,
  onChange,
  updateFields,
  data_elem,
  field
}: InputProps): JSX.Element => {
  const IncrementInputValue = useCallback( () => {
    if (updateFields) {
      if (field === 'payment_to') {
        if (!value) {
          updateFields({ payment_to: 1000 });
        }
        if (value && value >= 0) {
          updateFields({ payment_to: Number(value) + 1000 });
        }
      }
      if (field === 'payment_from') {
        if (value && value >= 0) {
          updateFields({ payment_from: Number(value) + 1000 });
        }
        if (!value) {
          updateFields({ payment_from: 1000 });
        }
      }
    }
  }, [value]);

  const DecrementInputValue = useCallback(()=> {
    if (updateFields) {
      if (field === 'payment_to') {
        if (!value) {
          updateFields({ payment_to: 0 });
        }
        if (value && value >= 0) {
          updateFields({ payment_to: Number(value) - 1000 });
        }

      }
      if (field === 'payment_from') {
        if (!value) {
          updateFields({ payment_from: 0 });
        }
        if (value && value >= 0) {
          updateFields({ payment_from: Number(value) - 1000 });
        }
      }
    }
  }, [value]);

  return (
    <div className='input' data-elem={data_elem}>
      <input
        placeholder={placeholder}
        min='0'
        value={value || DefaultInputValue}
        onChange={onChange}
        inputMode='numeric'
      />
      <div className={styles.arrows}>
        <ArrowUp onClick={IncrementInputValue} />
        <ArrowDown onClick={DecrementInputValue} />
      </div>
    </div>
  );
};
