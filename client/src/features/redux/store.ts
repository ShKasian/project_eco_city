import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import categoryReducer from './slices/categorySlice';
import factoryReducer from './slices/factorySlice'


import newsReducer from './slices/newsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    user: userSlice,
    categoriesData: categoryReducer,
    factoriesData: factoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
