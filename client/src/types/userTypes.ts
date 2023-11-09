export type UserModelType = {
  id: number;
  userName: string;
  email: string;
  isAdmin: boolean;
  img: string;
};

export type UserSignUpFormType = Omit<UserModelType, 'id'> & { password: string };
export type UserSigninFormType = Omit<UserSignUpFormType, 'userName'>;

export type PrivateCabinetType = Omit<UserModelType, 'isAdmin'>;



export type FormDataProfile = {
  formData: FormData;
}


export type PostInputs = {
  title: HTMLInputElement;
  file: HTMLInputElement & {files: FileList};
}


export type UserType =
  | (UserModelType & { status: 'logged' })
  | { status: 'loading' }
  | { status: 'guest' };
