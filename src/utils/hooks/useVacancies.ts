import { useQuery } from '@tanstack/react-query';
import { VacanciesService, VacancyService } from '../services/VacanciesService/VacacniesService';

export const useVacancies = (params?: {
  keyword: string;
  payment_from?: number;
  payment_to?: number;
  catalogues?: number;
}) => {
  const { data, isLoading, error, refetch, isSuccess, isFetching } = useQuery({
    queryKey: ['vacancies'],
    queryFn: () => VacanciesService.getVacancies(params),
    enabled: false
  });
  return { data, isLoading, error, refetch, isSuccess, isFetching };
};

export const useVacancy = (id?: string) => {
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ['trips', id],
    queryFn: () => VacancyService.getVacancy(id),
    enabled: !!id
  });

  return { data, isLoading, error, refetch, isFetching };
};