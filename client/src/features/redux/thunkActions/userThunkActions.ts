// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   submitSignupService,
//   submitSiginService,
//   logoutUserService,
// } from '../../../services/userService';
// import type {
//   UserLoginFormType,
//   UserModelType,
//   UserSignUpFormType,
// } from '../../../types/userTypes';

// import { setErrAction } from '../slices/ErrSlice';

// export const checkUserThunk = createAsyncThunk<UserResponseType>(
//   'user/check',
//   async (_, { rejectWithValue }) =>
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         checkUserService()
//           .then((res) => resolve(res))
//           .catch(() => reject(rejectWithValue('Error')));
//       }, 1000);
//     }),
// );

// export const submitSignupThunk = createAsyncThunk<UserSignUpFormType, UserModelType>(
//   'user/signup',
//   async (data, { dispatch, rejectWithValue }) =>
//     submitSignupService(data)
//       .then((res) => res)
//       .catch(() => {
//         dispatch(setErrAction('Ошибка регистрации'));
//         return rejectWithValue('Ошибка регистрации');
//       }),
// );

// export const submitSigninThunk = createAsyncThunk<UserLoginFormType, UserModelType>(
//   'user/signin',
//   async (data, { dispatch, rejectWithValue }) =>
//     submitSiginService(data)
//       .then((res) => res)
//       .catch(() => {
//         dispatch(setErrAction('Ошибка авторизации'));
//         return rejectWithValue('Ошибка авторизации');
//       }),
// );

// export const logoutUserThunk = createAsyncThunk<boolean>('user/logout', async () =>
//   logoutUserService().then(() => true),
// );
