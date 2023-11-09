import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNewsById } from '../../../services/NewsByIdService';
import type { NewsByIdTypeFormType, NewsByIdType } from '../../../types/NewsByIdType';

export const getOneNewsByIdThunk = createAsyncThunk<NewsByIdType, NewsByIdType['id']>(
  'news/getOneNewsByIdThunk',
  async (newsId: NewsByIdType['id']) => getNewsById(newsId),
);
