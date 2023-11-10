import { createSlice } from '@reduxjs/toolkit';
import type { CommentInitiativeTypes } from '../../../types/comentInitiativeTypes';
import { addCommentThunk, deleteCommentThunk, getCommentsThunk } from '../thunkActions/commentThunkAction';

type CommentState = CommentInitiativeTypes[];
const initialState: CommentState = [];

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getCommentsThunk.rejected, (state, action) => []);

    builder.addCase(addCommentThunk.fulfilled, (state, action) => [action.payload, ...state]);
    builder.addCase(addCommentThunk.rejected, (state, action) => state);

    builder.addCase(deleteCommentThunk.fulfilled, (state, action) =>
      state.filter((el) => el.id !== action.payload),
    );
    builder.addCase(deleteCommentThunk.rejected, (state, action) => state);
  },
});

export default commentSlice.reducer;