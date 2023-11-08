import { createAsyncThunk } from '@reduxjs/toolkit';
import type { FactoryModelTypes } from 'src/types/factoryTypes';
import { getFactories, getFilterFactory } from '../../../services/factoryService';

export const getFactoriesHandlerThunk = createAsyncThunk<FactoryModelTypes[]>(
  'factory/getFactoriesHandlerThunk',
  async () => getFactories().then((res) => res),
);

export const getFilterFactoryHandlerThunk = createAsyncThunk<FactoryModelTypes[], string>(
  'factory/getFilterFactoryHandlerThunk',
  async (value) => {
    const data = await getFilterFactory(value);
    return data;
  }
);

