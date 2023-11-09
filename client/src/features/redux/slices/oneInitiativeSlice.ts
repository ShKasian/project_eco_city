import { createSlice } from '@reduxjs/toolkit';
import type { OneInitiativeType } from 'src/types/oneInitiativeTypes';
import {
  addOneInitiativeThunk,
  deleteOneInitiativeThunk,
  getOneInitiativeByIdThunk,
} from '../thunkActions/oneInitiativeThunkActions';

const initialState: OneInitiativeType | null = null;

export const oneInitiativeSlice = createSlice({
  name: 'oneInitiative',
  initialState: null as OneInitiativeType | null,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOneInitiativeByIdThunk.fulfilled, (state, action) => action.payload);

    // builder.addCase(getOneInitiativeByIdThunk.rejected, (state, action) => {
    //   return state;
    // });

    // builder.addCase(addOneInitiativeThunk.fulfilled, (state, action) => {
    //   return state;
    // });

    // builder.addCase(addOneInitiativeThunk.rejected, (state, action) => {
    //   return state;
    // });

    // builder.addCase(deleteOneInitiativeThunk.fulfilled, (state, action) => {
    //   return state.filter((el) => el.id !== action.payload);
    // });
    // builder.addCase(deleteOneInitiativeThunk.rejected, (state, action) => {
    //   return state;
    // });
  },
});

export default oneInitiativeSlice.reducer;
