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
  PrivateCabinetType,
  FormDataProfile,
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

export const getProfileThunk = createAsyncThunk<PrivateCabinetType, { formData: PrivateCabinetType }>(
  '/lk',
  async (formData) => GetPrivateCabinetService(formData),
);

export const EditPrivateCabinetThunk = createAsyncThunk<FormDataProfile, {formData: PrivateCabinetType}>(
  '/lk',
  async (formData): Promise<FormDataProfile> => EditPrivateCabinetService(formData),
);

export const logoutUserThunk = createAsyncThunk<boolean>('/user/logout', async () =>
  logoutUserService().then(() => true),
);
