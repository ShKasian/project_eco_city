import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteNews as deleteNewsService,
  updateNews,
  getNews,
  submitNews,
} from '../../../services/newsSrvices';
import type { CardNewsFormType, CardNewsType } from '../../../types/newsTypes';

export const getNewsThunk = createAsyncThunk<CardNewsType[]>('news/getNewsThunk', async () =>
  getNews(),
);

export const addNewsThunk = createAsyncThunk<CardNewsType, CardNewsFormType>(
  'news/addNewsThunk',
  async (formData) => submitNews(formData),
);

export const updateNewsThunk = createAsyncThunk<
  CardNewsType,
  { id: CardNewsType['id']; formData: CardNewsFormType }
>('news/updateNewsThunk', async ({ id, formData }) => updateNews(id, formData));

export const deleteNewsThunk = createAsyncThunk<CardNewsType['id'], { id: CardNewsType['id'] }>(
  'deleteNewsThunk',
  async ({ id }) => deleteNewsService(id),
);
