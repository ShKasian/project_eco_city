import type { FactoryModelTypes } from 'src/types/factoryTypes';
import apiService from './apiService';

export const getFactories = async (): Promise<FactoryModelTypes[]> => {
  try {
    const { data } = await apiService<FactoryModelTypes[]>('/factory');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getFilterFactory = async (value: string): Promise<FactoryModelTypes[]> => {
  try {
    const { data } = await apiService<FactoryModelTypes[]>(`/factory/filter/${value}`);    
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
