import { createSlice } from '@reduxjs/toolkit';
import type { PrivateCabinetType, UserType } from '../../../types/userTypes';
import {
  signinUserThunk,
  logoutUserThunk,
  signUpUserThunk,
  checkUserThunk,
  EditPrivateCabinetThunk,
  getProfileThunk,
} from '../thunkActions/userThunkActions';

type UserSliceType = {
  data: UserType;
  error: Error | null;
  logoutDialogOpened: boolean;
  privateCabinet: PrivateCabinetType[];
};

const initialState: UserSliceType = {
  data: { status: 'loading' },
  error: null,
  logoutDialogOpened: false,
  privateCabinet: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // checkUserThunk
    builder.addCase(checkUserThunk.fulfilled, (state, { payload }) => {
      state.data = {
        ...payload,
        status: 'logged',
      };
    });
    builder.addCase(checkUserThunk.pending, (state) => {
      state.data = { status: 'loading' };
    });
    builder.addCase(checkUserThunk.rejected, (state) => {
      state.data = { status: 'guest' };
    });

    // signUpUserThunk
    builder.addCase(signUpUserThunk.fulfilled, (state, { payload }) => {
      state.data = {
        ...payload,
        status: 'logged',
      };
    });
    builder.addCase(signUpUserThunk.rejected, (state) => {
      state.data = { status: 'guest' };
    });

    // loginUserThunk
    builder.addCase(signinUserThunk.fulfilled, (state, { payload }) => {
      state.data = {
        ...payload,
        status: 'logged',
      };
    });
    builder.addCase(signinUserThunk.rejected, (state) => {
      state.data = { status: 'guest' };
    });


    // EditPrivateCabinetThunk
    builder.addCase(EditPrivateCabinetThunk.fulfilled, (state, action) => {
      const index = state.privateCabinet.findIndex((el) => el.id === action.payload.id);
      state.privateCabinet[index] = action.payload;
    });
    builder.addCase(EditPrivateCabinetThunk.rejected, (state, action) => state);

    // logoutUserThunk
    builder.addCase(logoutUserThunk.fulfilled, (state) => {
      state.data = { status: 'guest' };
    });
    builder.addCase(logoutUserThunk.rejected, (state) => state);
  },
});

export default userSlice.reducer;
