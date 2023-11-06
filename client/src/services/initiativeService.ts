import type { CardInitiativeFormType, CardInitiativeType } from '../types/initiativeTypes';
import apiService from './apiService';

export const getInitiative = async (): Promise<CardInitiativeType[]> => {
  const { data } = await apiService<CardInitiativeType[]>('/news');
  return data;
};

export const submitInitiative = async (
  formData: CardInitiativeFormType,
): Promise<CardInitiativeType> => {
  const { data } = await apiService.post<CardInitiativeType>('/news', formData);
  return data;
};

export const updateInitiative = async (
  id: number,
  formData: CardInitiativeFormType,
): Promise<CardInitiativeType> => {
  const { data } = await apiService.patch<CardInitiativeType>(`/news/${id}`, formData);
  return data;
};

export const deleteInitiative = async (
  id: CardInitiativeType['id'],
): Promise<CardInitiativeType['id']> => {
  await apiService.delete(`/news/${id}`);
  return id;
};
