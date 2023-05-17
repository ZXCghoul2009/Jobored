
import {axiosInstance} from "../../api/instance";


export const VacanciesService = {
  async getVacancies(params?: { keyword: string; payment_from?: number; payment_to?: number; catalogues?: number }) {
    try {
      const response = await axiosInstance.get(import.meta.env.VITE_GET_VACANCIES, {
        params,
        headers : {
          'X-Api-App-Id': import.meta.env.VITE_CLIENT_SECRET
        }
      });
      return response.data;
    } catch (error) {
        return error
    }
  }
};

export const VacancyService = {
  async getVacancy(id?: string) {
    const response = await axiosInstance.get(`${import.meta.env.VITE_GET_VACANCIES}${id}`);
    return response.data
  }
};