import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  EditPrivateCabinetService,
  GetPrivateCabinetService,
  checkUserService,
  logoutUserService,
  submitSigninService,
  submitSignupService,
} from '../../../services/userService';
import type {
  UserSigninFormType,
  UserModelType,
  UserSignUpFormType,
  PrivateCabinetFormType,
  PrivateCabinetType,
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

export const getProfileThunk = createAsyncThunk<
  UserModelType,
  {formData: PrivateCabinetType }
  >('lk', async ({formData }) => GetPrivateCabinetService());

export const EditPrivateCabinetThunk = createAsyncThunk<
  UserModelType,
  { formData: PrivateCabinetFormType }
>('lk', async (formData ) => EditPrivateCabinetService(formData));

export const logoutUserThunk = createAsyncThunk<boolean>('/user/logout', async () =>
  logoutUserService().then(() => true),
);