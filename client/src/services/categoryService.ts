import type { CategoryModelTypes } from 'src/types/categoryTypes';
import apiService from './apiService';

export const getCategories = async (): Promise<CategoryModelTypes[]> => {
  try {
    const { data } = await apiService<CategoryModelTypes[]>('/category');
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const getFactory = async (id: CategoryModelTypes['id']): Promise<CategoryModelTypes> => {
//   const { data } = await apiService<CategoryModelTypes>(`/factory/${id}`);
//   return data;
// };
