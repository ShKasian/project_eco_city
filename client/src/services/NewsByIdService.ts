import type { NewsByIdTypeFormType, NewsByIdType } from '../types/NewsByIdType';
import apiService from './apiService';

export const getNewsById = async (newsId: number): Promise<NewsByIdType> => {
  const { data } = await apiService.get<NewsByIdType>(`/news/${newsId}`);
  return data;
};
// export const submitNews = async (formData: NewsByIdTypeFormType): Promise<NewsByIdType> => {
//   const { data } = await apiService.post<NewsByIdType>('/news', formData);
//   return data;
// };

// export const deleteNews = async (id: NewsByIdType['id']): Promise<NewsByIdType['id']> => {
//   await apiService.delete(`/news/${id}`);
//   return id;
// };
