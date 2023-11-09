import type { CardIdeaFormType, CardIdeaType } from 'src/types/ideaTypes';
import apiService from './apiService';

export const getIdeas = async (): Promise<CardIdeaType[]> => {
  const { data } = await apiService<CardIdeaType[]>('/ideas');
  return data;
};

export const submitIdeas = async (formData: CardIdeaFormType): Promise<CardIdeaType> => {
  const { data } = await apiService.post<CardIdeaType>('/ideas', formData);
  return data;
};

export const updateIdeas = async (id: number, formData: CardIdeaFormType): Promise<CardIdeaType> => {
  const { data } = await apiService.patch<CardIdeaType>(`/ideas/${id}`, formData);
  return data;
};

export const deleteIdeas = async (id: CardIdeaType['id']): Promise<CardIdeaType['id']> => {
  await apiService.delete(`/ideas/${id}`);
  return id;
};
