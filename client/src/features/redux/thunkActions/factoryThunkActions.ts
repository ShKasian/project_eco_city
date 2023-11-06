import { createAsyncThunk } from '@reduxjs/toolkit';
import type { FactoryModelTypes } from 'src/types/factoryTypes';
import { getFactories } from '../../../services/factoryService';

export const getFactoriesHandlerThunk = createAsyncThunk<FactoryModelTypes[]>(
  'factory/getFactoriesHandlerThunk',
  async () => getFactories().then((res) => res),
);
