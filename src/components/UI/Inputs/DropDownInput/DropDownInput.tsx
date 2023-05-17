import React from "react";

import styles from './DropDownInput.module.css';
import '../../fields.css';

interface DropDownInputProps extends React.HTMLProps<HTMLInputElement> {
  focused: boolean;
}

export const DropDownInput = ({
  placeholder,
  value,
  onChange,
  focused,
  onFocus
}: DropDownInputProps): JSX.Element => (
    <div className='input' data-elem="industry-select">
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
      />
      <div className={styles.icon}>
        {focused ? (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19 15L12.7809 9.66938C12.3316 9.2842 11.6684 9.2842 11.2191 9.66938L5 15'
              stroke='#5E96FC'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        ) : (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5 9L11.2191 14.3306C11.6684 14.7158 12.3316 14.7158 12.7809 14.3306L19 9'
              stroke='#ACADB9'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        )}
      </div>
    </div>
  );