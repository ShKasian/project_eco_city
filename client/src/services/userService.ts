import type {
  FormDataProfile,
  PrivateCabinetType,
  UserModelType,
  UserSignUpFormType,
  UserSigninFormType,
} from '../types/userTypes';
import apiService from './apiService';

export const checkUserService = async (): Promise<UserModelType> => {
  const { data } = await apiService<UserModelType>('/user/check');
  return data;
};

export const submitSignupService = async (formData: UserSignUpFormType): Promise<UserModelType> => {
  const { data } = await apiService.post<UserModelType>('/user/signup', formData);
  return data;
};

export const submitSigninService = async (formData: UserSigninFormType): Promise<UserModelType> => {
  const { data } = await apiService.post<UserModelType>('/user/signin', formData);
  return data;
};

export const GetPrivateCabinetService = async (formData: FormDataProfile): Promise<PrivateCabinetType> => {
  const { data } = await apiService.get<PrivateCabinetType>('/lk', formData);
  return data;
};

export const EditPrivateCabinetService = async (formData: FormDataProfile,): Promise<FormDataProfile> => {
  const { data } = await apiService.patch<FormDataProfile>('/lk', formData);
  return data;
};

export const logoutUserService = (): Promise<void> => apiService('/user/logout');