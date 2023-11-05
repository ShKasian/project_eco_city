import { configureStore } from '@reduxjs/toolkit';
// import userSlice from './slices/userSlice';
import newsReducer from './slices/newsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
