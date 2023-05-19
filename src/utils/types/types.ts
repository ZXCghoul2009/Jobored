export type Vacancy = {
  title: string;
  type_of_work: string;
  payment_from: number;
  payment_to: number;
  location: string;
  id_vacancy: number;
  currency: string;
};

export type SearchData = {
  keyword: string;
  catalogues_data: string;
  catalogues: number | undefined;
  payment_from: number | undefined;
  payment_to: number | undefined;
};

export type FilterProps = {
  resetFields: () => void;
  data: SearchData;
  updateFields: (fields: Partial<SearchData>) => void;
  onClose?: () => void;
};