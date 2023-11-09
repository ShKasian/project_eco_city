import { createAsyncThunk } from '@reduxjs/toolkit';
// import { deleteComment, getComments, submitComment } from '../../../services/commentsServices';
import type { CommentInitiativeTypes, CommentInitiativeTypesFormType } from '../../../types/comentInitiativeTypes';
import { deleteComment, getComments, submitComment } from '../../../services/commentService';

export const getCommentsThunk = createAsyncThunk<
  CommentInitiativeTypes[],
  CommentInitiativeTypes['id']
>('/Comment/getCommentThunk', async (id) => getComments(id));
export const addCommentThunk = createAsyncThunk<
CommentInitiativeTypes,
  { id: CommentInitiativeTypes['id']; formData: CommentInitiativeTypesFormType }
>('/Comment/addCommentThunk', async ({ id, formData }) => submitComment(id, formData));

export const deleteCommentThunk = createAsyncThunk<CommentInitiativeTypes['id'], { id: CommentInitiativeTypes['id'] }>(
  '/Comment/deleteCommentThunk',
  async ({ id }) => deleteComment(id),
);
