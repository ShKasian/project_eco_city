import type {
  UserModelType,
  UserPrivateCabinetFormType,
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


export const GetPrivateCabinetService = (id: UserPrivateCabinetFormType['id']): Promise<UserPrivateCabinetFormType> => 
apiService<UserPrivateCabinetFormType>(`api/lk/${id}`).then((res) => res.data);

export const submitPrivateCabinetService = async (
  id: UserPrivateCabinetFormType['id'],
  formData: UserPrivateCabinetFormType,
): Promise<UserModelType> => {
  const { data } = await apiService.post<UserModelType>(`/lk/${id}`, formData);
  return data;

};

export const logoutUserService = (): Promise<void> => apiService('/logout');
