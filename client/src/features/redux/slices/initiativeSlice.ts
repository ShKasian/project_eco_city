import { createSlice } from '@reduxjs/toolkit';
import type { CardInitiativeType } from 'src/types/initiativeTypes';
import {
  addInitiativeThunk,
  updateInitiativeThunk,
  deleteInitiativeThunk,
  getInitiativeThunk,
} from '../thunkActions/initiativeThunk';

type NewsState = CardInitiativeType[];
const initialState: NewsState = [];

export const newsSlice = createSlice({
  name: 'initiative',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getInitiativeThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getInitiativeThunk.fulfilled, (state, action) => []);

    builder.addCase(addInitiativeThunk.fulfilled, (state, action) => [action.payload, ...state]);
    builder.addCase(addInitiativeThunk.rejected, (state, action) => state);

    builder.addCase(updateInitiativeThunk.fulfilled, (state, action) =>
      state.map((initiative) =>
        initiative.id === action.payload.id ? action.payload : initiative,
      ),
    );
    builder.addCase(updateInitiativeThunk.fulfilled, (state, action) => state);

    builder.addCase(deleteInitiativeThunk.fulfilled, (state, action) =>
      state.filter((el) => el.id !== action.payload),
    );
    builder.addCase(deleteInitiativeThunk.rejected, (state, action) => state);
  },
});
