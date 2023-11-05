import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { submitSiginService, submitSignupService } from "../../../services/userService"
import type {
  UserSigninFormType,
  UserModelType,
  UserSignUpFormType,
} from '../../../types/userTypes';

// export const checkUserThunk = createAsyncThunk<UserModelType>('/checkUser', () => {
  
// });

export const signUpUserThunk = createAsyncThunk<UserModelType, UserSignUpFormType>(
  'user/signup',
 (formData) => submitSignupService(formData),
);

export const signinUserThunk = createAsyncThunk<UserModelType, UserSigninFormType>(
  'user/login',
  (formData) => submitSiginService(formData),
);

export const logoutUserThunk = createAsyncThunk('/logout', async () => axios('/logout'));
