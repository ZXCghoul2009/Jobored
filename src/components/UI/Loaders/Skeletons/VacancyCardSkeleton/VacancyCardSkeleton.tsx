import React from 'react';
import {LocationIcon, StarDefault} from '@/static/Icons';
import {VacancyItemLoader} from './components';

import styles from './VacancyCardSkeleton.module.css';

export const VacancyCardSkeleton = (): JSX.Element => (
    <div className={styles.card_container}>
      <div className={styles.vacancy_info__container}>
        <div className={styles.vacancy_tittle}>
          <VacancyItemLoader/>
        </div>
        <div className={styles.vacancy_info}>
          <div className={styles.vacancy_salary}>
            <VacancyItemLoader/>
          </div>
          <span>•</span>
          <div className={styles.vacancy_work__type}>
            <VacancyItemLoader/>
          </div>
        </div>
        <div className={styles.vacancy_location}>
          <LocationIcon/>
          <VacancyItemLoader/>
        </div>
      </div>
      <div>
        <StarDefault/>
      </div>
    </div>
);