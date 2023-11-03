import type { CardNewsFormType, CardNewsType } from '../types/newsTypes';
import apiService from './apiService';

export const getNews = async (): Promise<CardNewsType[]> => {
  const { data } = await apiService<CardNewsType[]>('/news');
  return data;
};

export const submitNews = async (formData: CardNewsFormType): Promise<CardNewsType> => {
  const { data } = await apiService.post<CardNewsType>('/news', formData);
  return data;
};

export const updateNews = async (id: number, formData: CardNewsFormType): Promise<CardNewsType> => {
  const { data } = await apiService.patch<CardNewsType>(`/news/${id}`, formData);
  return data;
};

export const deleteNews = async (id: CardNewsType['id']): Promise<CardNewsType['id']> => {
  await apiService.delete(`/news/${id}`);
  return id;
};
