import React, { useCallback, useState } from 'react';
import { Filter, Search, VacanciesCards } from '@/components';
import { FilterButton } from '@/UI/Buttons';
import { useOnClickOutside } from '@/utils/hooks';

import styles from './SearchPage.module.css';

export type SearchData = {
  keyword: string;
  catalogues_data: string;
  catalogues: number | undefined;
  payment_from: number | undefined;
  payment_to: number | undefined;
};

const InitialState: SearchData = {
  keyword: '',
  catalogues_data: '',
  catalogues: undefined,
  payment_from: undefined,
  payment_to: undefined
};
export const SearchPage = (): JSX.Element => {
  const [searchData, setSearchData] = useState<SearchData>(InitialState);
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const filterContainer = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(filterContainer, () => setFilterIsOpen(false));

  const updateFields = useCallback(
    (fields: Partial<SearchData>) => {
      setSearchData((prev) => ({ ...prev, ...fields }));
    },
    [searchData]
  );

  const resetFields = useCallback(() => {
    setSearchData(InitialState);
  }, [searchData]);

  const onClose = useCallback(() => {
    setFilterIsOpen(false);
  }, [filterIsOpen]);
  return (
    <div className={styles.search_page}>
      <div className={styles.filter_container}>
        <Filter updateFields={updateFields} data={searchData} resetFields={resetFields} />
      </div>
      <section className={styles.search_content}>
        <div className={styles.search_bar}>
          <Search updateFields={updateFields} keyword={searchData.keyword} />
          <div className={styles.filter_mobile__button}>
            <FilterButton onClick={() => setFilterIsOpen(true)} />
          </div>
        </div>
        <VacanciesCards />
      </section>
      {filterIsOpen && (
        <div className={styles.filter_container__mobile}>
          <div ref={filterContainer}>
            <Filter
              updateFields={updateFields}
              data={searchData}
              resetFields={resetFields}
              onClose={onClose}
            />
          </div>
        </div>
      )}
    </div>
  );
};
