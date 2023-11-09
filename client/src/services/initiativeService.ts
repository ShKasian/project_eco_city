import type { CardInitiativeFormType, CardInitiativeType } from '../types/initiativeTypes';
import type { OneInitiativeType, OneInitiativeFormType } from '../types/oneInitiativeTypes';
import apiService from './apiService';

export const getInitiative = async (): Promise<CardInitiativeType[]> => {
  const { data } = await apiService<CardInitiativeType[]>('/initiative');
  console.log(data);
  return data;
};

export const getOneInitiativeById = async (initiativeId: number): Promise<OneInitiativeType> => {
  const { data } = await apiService.get<OneInitiativeType>(`/initiative/${initiativeId}`);
  console.log(data);

  return data;
};

export const submitInitiative = async (
  formData: CardInitiativeFormType,
): Promise<CardInitiativeType> => {
  const { data } = await apiService.post<CardInitiativeType>('/initiative', formData);
  return data;
};

export const updateInitiative = async (
  id: number,
  formData: CardInitiativeFormType,
): Promise<CardInitiativeType> => {
  const { data } = await apiService.patch<CardInitiativeType>(`/initiative/${id}`, formData);
  return data;
};

export const deleteInitiative = async (
  id: CardInitiativeType['id'],
): Promise<CardInitiativeType['id']> => {
  await apiService.delete(`/initiative/${id}`);
  return id;
};
