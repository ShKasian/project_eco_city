import type { OneInitiativeType, OneInitiativeFormType } from '../types/oneInitiativeTypes';
import apiService from './apiService';

export const getOneInitiativeById = async (initiativeId: number): Promise<OneInitiativeType> => {
  const { data } = await apiService.get<OneInitiativeType>(`/initiative/get-one/${initiativeId}`);
  return data;
};

export const addOneInitiative = async (initiativeId: number): Promise<OneInitiativeType> => {
  const { data } = await apiService.post<OneInitiativeType>('/initiative', { initiativeId });
  return data;
};

export const deleteInitiativeById = async (
  id: OneInitiativeType['id'],
): Promise<OneInitiativeType['id']> => {
  await apiService.delete(`/initiative/${id}`);
  return id;
};
