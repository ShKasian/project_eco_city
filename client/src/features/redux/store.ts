import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

import newsReducer from './slices/newsSlice';
import initiativeReduser from './slices/initiativeSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,

    initiative: initiativeReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
