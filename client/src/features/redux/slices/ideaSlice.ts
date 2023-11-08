import { createSlice } from '@reduxjs/toolkit';
import type{ CardIdeaType } from '../../../types/ideaTypes'
import { addIdeaThunk, deleteIdeaThunk, getIdeaThunk, updateIdeaThunk } from '../thunkActions/ideaThunkAction';

const initialState: CardIdeaType[] = [];


export const newsSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getIdeaThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getIdeaThunk.rejected, (state, action) => []);

    builder.addCase(addIdeaThunk.fulfilled, (state, action) => [action.payload, ...state]);
    builder.addCase(addIdeaThunk.rejected, (state, action) => state);

    builder.addCase(updateIdeaThunk.fulfilled, (state, action) =>
      state.map((ideas) => (ideas.id === action.payload.id ? action.payload : ideas))
    );
    builder.addCase(updateIdeaThunk.rejected, (state, action) => state);

    builder.addCase(deleteIdeaThunk.fulfilled, (state, action) =>
      state.filter((el) => el.id !== action.payload),
    );
    builder.addCase(deleteIdeaThunk.rejected, (state, action) => state);
  },
});

export default newsSlice.reducer;
