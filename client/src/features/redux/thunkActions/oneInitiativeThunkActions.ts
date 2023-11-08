import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteInitiativeById as deleteOneInitiativeService,
  getOneInitiativeById,
  addOneInitiative,
} from '../../../services/initiativeByIdService';
import type { OneInitiativeFormType, OneInitiativeType } from '../../../types/oneInitiativeTypes';

export const getOneInitiativeByIdThunk = createAsyncThunk<OneInitiativeType, number>(
  'initiative/getOneInitiativeByIdThunk',
  async (initiativeId) => getOneInitiativeById(initiativeId),
);

export const addOneInitiativeThunk = createAsyncThunk<OneInitiativeType, number>(
  'initiative/addInitiativeThunk',
  async (formData) => addOneInitiative(formData),
);

export const deleteOneInitiativeThunk = createAsyncThunk<
  OneInitiativeType['id'],
  { id: OneInitiativeType['id'] }
>('deleteOneInitiativeThunk', async ({ id }) => deleteOneInitiativeService(id));
