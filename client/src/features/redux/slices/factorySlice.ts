import { createSlice } from '@reduxjs/toolkit';
import type { FactoryModelTypes } from 'src/types/factoryTypes';
import {
  getFactoriesHandlerThunk,
  getFilterFactoryHandlerThunk,
} from '../thunkActions/factoryThunkActions';

const initialState: FactoryModelTypes[] = [];

const factoriesSlice = createSlice({
  name: 'factories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFactoriesHandlerThunk.fulfilled, (state, action) => action.payload);

    builder.addCase(getFilterFactoryHandlerThunk.fulfilled, (state, action) => action.payload);
  },
});

const factoryReducer = factoriesSlice.reducer;

export default factoryReducer;
