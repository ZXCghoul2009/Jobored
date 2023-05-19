import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { Filter } from '@/components';
import { FilterProps } from '@/utils/types/types';

import styles from './ModalFilter.module.css';

interface ModalFilterProps extends FilterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalFilter = forwardRef(
  (
    { isOpen, updateFields, data, resetFields, onClose }: ModalFilterProps,
    ref: React.Ref<HTMLDivElement>
  ): JSX.Element | null => {
    if (!isOpen) return null;
    return createPortal(
      <div className={styles.filter_container__mobile}>
        <div ref={ref}>
          <Filter
            updateFields={updateFields}
            data={data}
            resetFields={resetFields}
            onClose={onClose}
          />
        </div>
      </div>,
      document.body
    );
  }
);
