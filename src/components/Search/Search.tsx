import React from 'react';
import { ButtonSmall } from '@/UI/Buttons';
import { useVacancies } from '@/utils/hooks';
import { SearchIcon } from '@/static/Icons';

import styles from './SearchModule.module.css';

type SearchData = {
  keyword: string;
};

type SearchProps = SearchData & {
  updateFields: (fields: Partial<SearchData>) => void;
};

export const Search = ({ updateFields, keyword }: SearchProps): JSX.Element => {
  const { refetch } = useVacancies({
    keyword
  });
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    refetch();
  };
  return (
    <form onSubmit={submitHandler} className={styles.search_container} data-elem='search-input'>
      <div className={styles.input_container}>
        <SearchIcon />
        <input
          type='text'
          placeholder='Введите название вакансии'
          value={keyword}
          onChange={(e) => updateFields({ keyword: e.target.value })}
          className={styles.input}
        />
      </div>

      <ButtonSmall variant='1' type='submit' data_elem='search-button'>
        Поиск
      </ButtonSmall>
    </form>
  );
};