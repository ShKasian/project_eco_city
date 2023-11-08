export type UserModelType = {
  id: number;
  userName: string;
  email: string;
  isAdmin: boolean;
};

export type UserSignUpFormType = Omit<UserModelType, 'id'> & { password: string };
export type UserSigninFormType = Omit<UserSignUpFormType, 'userName'>;

export type PrivateCabinetType = (UserModelType) & { img: string };
export type PrivateCabinetFormType = Omit<PrivateCabinetType, 'id'> & { img: string };


export type PostInputs = {
  title: HTMLInputElement;
  file: HTMLInputElement & {files: FileList};
}


export type UserType =
  | (UserModelType & { status: 'logged' })
  | { status: 'loading' }
  | { status: 'guest' };
