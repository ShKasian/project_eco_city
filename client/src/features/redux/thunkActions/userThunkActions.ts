
import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkUserService, logoutUserService, submitSigninService, submitSignupService } from "../../../services/userService"
import type {
  UserSigninFormType,
  UserModelType,
  UserSignUpFormType,
} from '../../../types/userTypes';


export const checkUserThunk = createAsyncThunk<UserModelType>('/user/check', () => 
  checkUserService(),
);

export const signUpUserThunk = createAsyncThunk<UserModelType, UserSignUpFormType>(
  '/user/signup',
 (formData) => submitSignupService(formData),
);

export const signinUserThunk = createAsyncThunk<UserModelType, UserSigninFormType>(
  '/user/signin',
  (formData) => submitSigninService(formData),
);

export const logoutUserThunk = createAsyncThunk<boolean>('/user/logout', async () => logoutUserService().then(() => true)
);

