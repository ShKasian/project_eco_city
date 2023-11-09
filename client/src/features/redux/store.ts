import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import categoryReducer from './slices/categorySlice';
import factoryReducer from './slices/factorySlice';
import oneInitiativeReducer from './slices/oneInitiativeSlice';
import newsReducer from './slices/newsSlice';
import initiativeReduser from './slices/initiativeSlice';
import ideaReducer from './slices/ideaSlice';
import oneNewsReducer from './slices/newsByIdSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    initiative: initiativeReduser,
    user: userSlice,
    categoriesData: categoryReducer,
    factoriesData: factoryReducer,
    oneInitiative: oneInitiativeReducer,
    ideas: ideaReducer,
    oneNews: oneNewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
