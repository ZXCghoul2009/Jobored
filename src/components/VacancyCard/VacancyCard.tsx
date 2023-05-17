import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { StarButton } from '@/UI/Buttons';
import { LocationIcon } from '@/static/Icons';
import { Vacancy } from '@/utils/types/types';

import styles from './VacancyCard.module.css';

interface VacancyCardProps extends Vacancy {
  extra_style?: { [key: string]: string };
}

export const VacancyCard = React.memo(
  ({
    payment_from,
    payment_to,
    title,
    type_of_work,
    location,
    id_vacancy,
    currency,
    extra_style
  }: VacancyCardProps): JSX.Element => {
    const [salary, setSalary] = useState('Не указано');
    const url = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (payment_to === 0 && payment_from > 0) {
        setSalary(`з/п от ${payment_from} ${currency}`);
      }
      if (payment_from > 0 && payment_to > 0) {
        setSalary(`з/п ${payment_from}-${payment_to} ${currency}`);
      }
    }, []);
    const vacancy = {
      payment_from,
      payment_to,
      title,
      type_of_work,
      location,
      id_vacancy,
      currency
    };
    return (
      <div
        data-elem={`vacancy-${id_vacancy}`}
        className={extra_style ? extra_style.card_container : styles.card_container}
      >
        <div
          className={
            extra_style ? extra_style.vacancy_info__container : styles.vacancy_info__container
          }
          onClick={() => url.pathname !== '/vacancy' && navigate(`/vacancy/${id_vacancy}`)}
          role='presentation'
        >
          <div className={extra_style ? extra_style.vacancy_tittle : styles.vacancy_tittle}>
            {title}
          </div>
          <div className={styles.vacancy_info}>
            <div className={extra_style ? extra_style.vacancy_salary : styles.vacancy_salary}>
              {salary}
            </div>
            <span>•</span>
            <div
              className={extra_style ? extra_style.vacancy_work__type : styles.vacancy_work__type}
            >
              {type_of_work}
            </div>
          </div>
          <div className={extra_style ? extra_style.vacancy_location : styles.vacancy_location}>
            <LocationIcon />
            {location}
          </div>
        </div>
        <div>
          <StarButton vacancy={vacancy} />
        </div>
      </div>
    );
  }
);
