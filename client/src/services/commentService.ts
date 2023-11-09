import type { CommentInitiativeTypes, CommentInitiativeTypesFormType } from '../types/comentInitiativeTypes';
import apiService from './apiService';

export const getComments = async (
  id: CommentInitiativeTypes['id'],
): Promise<CommentInitiativeTypes[]> => {
  const { data } = await apiService<CommentInitiativeTypes[]>(`/comments/${id}`);
  return data;
};

export const submitComment = async (
  id: CommentInitiativeTypes['id'],
  formData: CommentInitiativeTypesFormType,
): Promise<CommentInitiativeTypes> => {
  const { data } = await apiService.post<CommentInitiativeTypes>(`/comments/${id}`, formData);
  return data;
};

export const deleteComment = async (id: CommentInitiativeTypes['id']): Promise<CommentInitiativeTypes['id']> => {
  await apiService.delete(`/comments/${id}`);
  return id;
};
