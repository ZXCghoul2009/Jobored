import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router';
import { useVacancy } from '@/utils/hooks';
import { VacancyCardSkeleton } from '@/UI/Loaders';
import { VacancyCard } from '@/components';

import styles from './VacancyPage.module.css';
import extra_styles from './VacancyCard.module.css';

type VacancyPageParams = {
  id: string;
};

export const VacancyPage = (): JSX.Element => {
  const params = useParams<VacancyPageParams>();
  const { refetch, data, isFetching, isLoading } = useVacancy(params.id);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.vacancy}>
        {isFetching && isLoading && <VacancyCardSkeleton />}
        {data && (
          <VacancyCard
            key={data.id}
            title={data.profession}
            type_of_work={data.type_of_work.title}
            payment_from={data.payment_from}
            payment_to={data.payment_to}
            location={data.town.title}
            id_vacancy={data.id}
            currency={data.currency}
            extra_style={extra_styles}
          />
        )}
        {data && (
          <div className={styles.vacancy_text__container}>
            {ReactHtmlParser(data.vacancyRichText)}
          </div>
        )}
      </div>
    </div>
  );
};
