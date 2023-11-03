import { createSlice } from '@reduxjs/toolkit';
import type { CardNewsType } from 'src/types/newsTypes';
import {
  addNewsThunk,
  updateNewsThunk,
  deleteNewsThunk,
  getNewsThunk,
} from '../thunkActions/newsThunkActions';

type NewsState = CardNewsType[];
const initialState: NewsState = [];

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getNewsThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getNewsThunk.fulfilled, (state, action) => []);

    builder.addCase(addNewsThunk.fulfilled, (state, action) => [action.payload, ...state]);
    builder.addCase(addNewsThunk.rejected, (state, action) => state);

    builder.addCase(updateNewsThunk.fulfilled, (state, action) =>
      state.map((news) => (news.id === action.payload.id ? action.payload : news)),
    );
    builder.addCase(updateNewsThunk.fulfilled, (state, action) => state);

    builder.addCase(deleteNewsThunk.fulfilled, (state, action) =>
      state.filter((el) => el.id !== action.payload),
    );
    builder.addCase(deleteNewsThunk.rejected, (state, action) => state);
  },
});
