import { configureStore } from '@reduxjs/toolkit';
import userSlice from './redux/slices/userSlice';

const store = configureStore({
  reducer: {
    userData: userSlice,
  },
});

export default store;
