import { createSlice } from '@reduxjs/toolkit';
import type{ CardIdeaType } from '../../../types/ideaTypes'
import { getIdeaThunk } from '../thunkActions/ideaThunkAction';

const initialState: CardIdeaType[] = [];


 const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getIdeaThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getIdeaThunk.rejected, (state, action) => []);

    // builder.addCase(addIdeaThunk.fulfilled, (state, action) => [action.payload, ...state]);
    // builder.addCase(addIdeaThunk.rejected, (state, action) => state);

    // builder.addCase(deleteIdeaThunk.fulfilled, (state, action) =>
    //   state.filter((el) => el.id !== action.payload),
    // );
    // builder.addCase(deleteIdeaThunk.rejected, (state, action) => state);
  },
});

const ideaReducer = ideasSlice.reducer
export default ideaReducer;
