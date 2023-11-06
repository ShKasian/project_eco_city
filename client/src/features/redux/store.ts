import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import categoryReducer from './slices/categorySlice';
import factoryReducer from './slices/factorySlice'


const store = configureStore({
  reducer: {
    userData: userSlice,
    categoriesData: categoryReducer,
    factoriesData: factoryReducer,
  },
});

export default store;
