import type { UserModelType, UserSignUpFormType, UserSigninFormType } from '../types/userTypes';
import apiService from './apiService';

export const checkUserService = async (): Promise<UserModelType> => {
  const { data } = await apiService<UserModelType>('/check');
  return data;
};

export const submitSignupService = async (formData: UserSignUpFormType): Promise<UserModelType> => {
const { data } = await apiService.post<UserModelType>('/user/signup', formData);
return data;
};

export const submitSiginService = async (formData: UserSigninFormType): Promise<UserModelType> => {
const { data } = await apiService.post<UserModelType>('/user/signin', formData);
return data;
};

export const logoutUserService = (): Promise<void> => apiService('/logout')