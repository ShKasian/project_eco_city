import { createSlice } from '@reduxjs/toolkit';
import type { CategoryModelTypes } from 'src/types/categoryTypes';
import { getCategoriesHandlerThunk } from '../thunkActions/categoryThunkActions';

const initialState: CategoryModelTypes[] = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesHandlerThunk.fulfilled, (state, action) => action.payload);
  },
});

const categoryReducer = categoriesSlice.reducer;

export default categoryReducer;
