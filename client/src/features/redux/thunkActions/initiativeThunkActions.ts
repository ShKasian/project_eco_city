import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteInitiative as deleteInitiativeService,
  updateInitiative,
  getInitiative,
  addInitiative,
} from '../../../services/initiativeService';
import type { CardInitiativeFormType, CardInitiativeType } from '../../../types/initiativeTypes';

export const getInitiativeThunk = createAsyncThunk<CardInitiativeType[]>(
  'initiative/getInitiativeThunk',
  async () => getInitiative(),
);

export const addInitiativeThunk = createAsyncThunk<CardInitiativeType, CardInitiativeFormType>(
  'initiative/addInitiativeThunk',
  async (formData) => addInitiative(formData),
);

export const updateInitiativeThunk = createAsyncThunk<
  CardInitiativeType,
  { id: CardInitiativeType['id']; formData: CardInitiativeFormType }
>('initiative/updateInitiativeThunk', async ({ id, formData }) => updateInitiative(id, formData));

export const deleteInitiativeThunk = createAsyncThunk<
  CardInitiativeType['id'],
  { id: CardInitiativeType['id'] }
>('deleteInitiativeThunk', async ({ id }) => deleteInitiativeService(id));
