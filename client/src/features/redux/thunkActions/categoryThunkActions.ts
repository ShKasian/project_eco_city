import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CategoryModelTypes } from 'src/types/categoryTypes';
import { getCategories } from '../../../services/categoryService';

export const getCategoriesHandlerThunk = createAsyncThunk<CategoryModelTypes[]>(
  'category/getCategoriesHandlerThunk',
  async () => getCategories().then((res) => res),
);
