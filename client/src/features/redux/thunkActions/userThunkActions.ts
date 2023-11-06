
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { submitPrivateCabinetService, submitSigninService, submitSignupService } from "../../../services/userService"
import type {
  UserSigninFormType,
  UserModelType,
  UserSignUpFormType,
  UserPrivateCabinetFormType,
} from '../../../types/userTypes';


// export const checkUserThunk = createAsyncThunk<UserModelType>('/checkUser', () => {
  
// });


export const signUpUserThunk = createAsyncThunk<UserModelType, UserSignUpFormType>(
  'user/signup',
 (formData) => submitSignupService(formData),
);

export const signinUserThunk = createAsyncThunk<UserModelType, UserSigninFormType>(
  'user/login',
  (formData) => submitSigninService(formData),
);

// export const UserPrivateCabinetThunk = createAsyncThunk<UserModelType, UserPrivateCabinetFormType>(
//   'lk/:id',
//   (formData) => submitPrivateCabinetService(formData),
// );


export const logoutUserThunk = createAsyncThunk('/login', async () => axios('/logout'));

