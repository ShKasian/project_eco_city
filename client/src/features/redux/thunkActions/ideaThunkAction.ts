import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteIdeas, getIdeas, submitIdeas, updateIdeas } from '../../../services/ideaService'
import type { CardIdeaFormType, CardIdeaType } from '../../../types/ideaTypes'

export const getIdeaThunk = createAsyncThunk<CardIdeaType[]>(
  'idea/getIdeaThunk',
  async () => getIdeas(),
);

export const addIdeaThunk = createAsyncThunk<CardIdeaType, CardIdeaFormType>(
  'idea/addIdeaThunk',
  async (formData) => submitIdeas(formData),
);

export const updateIdeaThunk = createAsyncThunk<
CardIdeaType,
  { id: CardIdeaType['id']; formData: CardIdeaFormType }
>('idea/updateIdeaThunk', async ({ id, formData }) => updateIdeas(id, formData));

export const deleteIdeaThunk = createAsyncThunk<
CardIdeaType['id'],
  { id: CardIdeaType['id'] }
>('idea/deleteIdeaThunk', async ({ id }) => deleteIdeas(id));
