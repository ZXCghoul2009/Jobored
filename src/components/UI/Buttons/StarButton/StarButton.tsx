import React, { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { StarDefault, StartPressed } from '@/static/Icons';
import { Vacancy } from '@/utils/types/types';
import { StarButtonProps } from '@/UI/Buttons/interfaces';

import styles from './StarButton.module.css';

export const StarButton = React.memo(({ vacancy }: StarButtonProps) => {
  const [favorite, setFavorite] = useState(false);
  const [favoriteVacancy, setFavoriteVacancy] = useLocalStorage<Vacancy[]>('vacancies', []);

  useEffect(() => {
    const data = localStorage.getItem('vacancies');
    if (data) {
      const parsedVacancies = JSON.parse(data);
      parsedVacancies.map((vacancy: Vacancy) => {
        if (vacancy.id_vacancy.toString().includes(vacancy.id_vacancy.toString())) {
          return setFavorite(true);
        }
        return setFavorite(false);
      });
    }
  }, []);

  return (
    <div
      className={styles.star_button}
      onClick={() =>
        setFavorite((prevState) => {
          if (prevState) {
            setFavoriteVacancy((prevState) => {
              if (prevState) {
                return prevState.filter((vacancyId) => vacancyId.id_vacancy !== vacancy.id_vacancy);
              }
            });
          }
          if (!prevState) {
            setFavoriteVacancy((prevState) => {
              if (prevState) {
                return [...prevState, vacancy];
              }
            });
          }
          return !prevState;
        })
      }
      data-elem={`vacancy-${vacancy.id_vacancy}-shortlist-button`}
      role='presentation'
    >
      {!favorite ? <StarDefault /> : <StartPressed />}
    </div>
  );
});
