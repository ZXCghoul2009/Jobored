import React, { useCallback, useState } from 'react';
import { Paginate, VacancyCard } from '@/components';
import { Vacancy } from '@/utils/types/types';
import { useVacancies } from '@/utils/hooks';
import { Loader } from '@/UI/Loaders';

export const VacanciesCards = (): JSX.Element => {
  const { data, isFetching } = useVacancies();
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = useCallback(
    (clickEvent: {
      index: number | null;
      selected: number;
      nextSelectedPage: number | undefined;
      event: object;
      isPrevious: boolean;
      isNext: boolean;
      isBreak: boolean;
      isActive: boolean;
    }) => {
      const selectedPage = clickEvent.selected;
      setCurrentPage(selectedPage);
    },
    []
  );
  const getItemsForPage = useCallback(
    (items: Vacancy[]): Vacancy[] => {
      const perPage = 4;
      const startIndex = currentPage * perPage;
      const endIndex = startIndex + perPage;
      return items.slice(startIndex, endIndex);
    },
    [currentPage]
  );
  return (
    <div>
      {isFetching && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            marginTop: '10px'
          }}
        >
          <Loader />
        </div>
      )}
      {data &&
        data.objects &&
        !isFetching &&
        getItemsForPage(data.objects).map((vacancy: any) => (
          <VacancyCard
            key={vacancy.id}
            title={vacancy.profession}
            type_of_work={vacancy.type_of_work.title}
            payment_from={vacancy.payment_from}
            payment_to={vacancy.payment_to}
            location={vacancy.town.title}
            id_vacancy={vacancy.id}
            currency={vacancy.currency}
          />
        ))}
      {data && data.objects && data.objects.length > 4 && !isFetching && (
        <Paginate onPageChange={handlePageClick} />
      )}
    </div>
  );
};
