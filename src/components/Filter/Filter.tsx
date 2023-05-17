import React, { useCallback } from 'react';
import { SearchData } from '@/pages/SearchPage/SearchPage';
import { useVacancies } from '@/utils/hooks';
import { ButtonMedium, NumberInput, ResetButton } from '@/UI/index';
import { DropDown } from '../DropDown/DropDown';

import styles from './Filter.module.css';

type FilterProps = {
  resetFields: () => void;
  data: SearchData;
  updateFields: (fields: Partial<SearchData>) => void;
  onClose?: () => void;
};

export const Filter = ({ data, updateFields, resetFields, onClose }: FilterProps): JSX.Element => {
  const changePaymentTo = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ payment_to: Number(event.target.value) });
  }, []);

  const changePaymentFrom = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ payment_from: Number(event.target.value) });
  }, []);

  const { refetch } = useVacancies({
    keyword: data.keyword,
    catalogues: data.catalogues,
    payment_from: Number(data.payment_from),
    payment_to: Number(data.payment_to)
  });

  const submitHandler = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    if (onClose) {
      onClose();
    }
    refetch();
  }, []);

  return (
    <div className={styles.filter_container}>
      <div className={styles.filter_header}>
        <div className={styles.filter_header__label}>Фильтры</div>
        <ResetButton reset={resetFields}>Сбросить всё</ResetButton>
      </div>
      <form onSubmit={submitHandler} className={styles.filter_form}>
        <div className={styles.filter_item}>
          Отрасль
          <DropDown
            updateFields={updateFields}
            catalogues={data.catalogues}
            catalogues_data={data.catalogues_data}
          />
        </div>
        <div className={styles.filter_item}>
          Оклад
          <NumberInput
            data_elem='salary-from-input'
            placeholder='От'
            updateFields={updateFields}
            field='payment_from'
            onChange={changePaymentFrom}
            value={data.payment_from}
          />
          <NumberInput
            data_elem='salary-to-input'
            placeholder='До'
            updateFields={updateFields}
            field='payment_to'
            onChange={changePaymentTo}
            value={data.payment_to}
          />
        </div>
        <ButtonMedium variant='1' type='submit' data_elem='search-button'>
          Применить
        </ButtonMedium>
      </form>
    </div>
  );
};
