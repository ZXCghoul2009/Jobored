import { memo } from 'react';
import ReactPaginate from 'react-paginate';
import { LeftArrow, RightArrow } from '@/static/Icons';

import styles from './Paginate.module.css';

interface PaginateProps {
  onPageChange(selectedItem: { selected: number }): void;

  pageCount?: number;
}

export const Paginate = memo(({ onPageChange, pageCount }: PaginateProps) => (
  <ReactPaginate
    pageCount={pageCount || 3}
    nextLabel={<RightArrow />}
    pageRangeDisplayed={4}
    onPageChange={onPageChange}
    containerClassName={styles.paginate_container}
    previousLabel={<LeftArrow />}
    activeClassName={styles.page_active}
    pageClassName={styles.page}
    nextClassName={styles.arrows}
    previousClassName={styles.arrows}
    nextLinkClassName=''
    disabledClassName={styles.arrows_disabled}
  />
));
