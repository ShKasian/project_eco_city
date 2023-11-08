import { createAsyncThunk } from '@reduxjs/toolkit';
import {  getIdeas } from '../../../services/ideaService'
import type { CardIdeaType } from '../../../types/ideaTypes'

export const getIdeaThunk = createAsyncThunk<CardIdeaType[]>(
  'idea/getIdeaThunk',
  async () => getIdeas(),
);

// export const addIdeaThunk = createAsyncThunk<CardIdeaType, CardIdeaFormType>(
//   'idea/addIdeaThunk',
//   async (formData) => submitIdeas(formData),
// );

// export const deleteIdeaThunk = createAsyncThunk<
// CardIdeaType['id'],
//   { id: CardIdeaType['id'] }
// >('idea/deleteIdeaThunk', async ({ id }) => deleteIdeas(id));
