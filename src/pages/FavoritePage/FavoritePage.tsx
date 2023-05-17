import {useCallback, useEffect, useState} from 'react';
import {EmptyState, Paginate, VacancyCard} from '@/components';
import {Loader} from '@/UI/Loaders';
import {Vacancy} from '@/utils/types/types';

import styles from './FavoritePage.module.css';

export const FavoritePage = (): JSX.Element => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
  const getItemsForPage = useCallback((items: Vacancy[]): Vacancy[] => {
    const perPage = 4;
    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;
    return items.slice(startIndex, endIndex);
  }, []);
  useEffect(() => {
    setIsLoading(true);
    const favoriteVacancies = localStorage.getItem('vacancies');
    if (favoriteVacancies) {
      setVacancies(JSON.parse(favoriteVacancies));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleFavoriteVacanciesChange = (event: StorageEvent) => {
      if (event.storageArea === localStorage && event.key === 'vacancies') {
        setIsLoading(true);
        const favoriteVacancies = event.newValue;
        if (favoriteVacancies) {
          setVacancies(JSON.parse(favoriteVacancies));
          setIsLoading(false);
        }
      }
    };

    window.addEventListener('storage', handleFavoriteVacanciesChange);
    return () => window.removeEventListener('storage', handleFavoriteVacanciesChange);
  }, []);

  return (
      <div className={styles.page}>
        <div className={styles.vacancy_info__container}>
          {!vacancies.length && !isLoading && <EmptyState title='Упс, здесь еще ничего нет!'/>}
          {isLoading && (
              <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                  }}
              >
                <Loader/>
              </div>
          )}
          <div className={styles.vacancies_container}>
            {vacancies &&
            getItemsForPage(vacancies).map((vacancy: any) => (
                <VacancyCard
                    key={vacancy.id_vacancy}
                    title={vacancy.title}
                    type_of_work={vacancy.type_of_work}
                    payment_from={vacancy.payment_from}
                    payment_to={vacancy.payment_to}
                    location={vacancy.location}
                    id_vacancy={vacancy.id_vacancy}
                    currency={vacancy.currency}
                />
            ))}
          </div>
          {vacancies && vacancies.length > 4 && (
              <Paginate onPageChange={handlePageClick} pageCount={Math.ceil(vacancies.length / 4)}/>
          )}
        </div>
      </div>
  );
};
