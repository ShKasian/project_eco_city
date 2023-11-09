import { createSlice } from '@reduxjs/toolkit';
import type { NewsByIdTypeFormType, NewsByIdType } from '../../../types/NewsByIdType';
import { getOneNewsByIdThunk } from '../thunkActions/newsByIdThunkActions';

const initialState: NewsByIdType | null = null;

export const oneNewsSlice = createSlice({
  name: 'oneNews',
  initialState: null as NewsByIdType | null,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOneNewsByIdThunk.fulfilled, (state, action) => action.payload);
  },
});

export default oneNewsSlice.reducer;
