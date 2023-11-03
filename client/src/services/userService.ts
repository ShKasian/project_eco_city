import type { UserLoginFormType, UserModelType, UserSignUpFormType } from '../types/userTypes';
import apiService from './apiService';

export const checkUserService = (): Promise<UserModelType> =>
  apiService<UserModelType>('/users/check').then((res) => res.data);

export const submitSignupService = (data: UserSignUpFormType): Promise<UserModelType> =>
  apiService.post<UserModelType>('/users/signup', data).then((res) => res.data);

export const submitSiginService = (data: UserLoginFormType): Promise<UserModelType> =>
  apiService.post<UserModelType>('/users/signin', data).then((res) => res.data);

export const logoutUserService = (): Promise<void> =>
apiService('/users/logout')