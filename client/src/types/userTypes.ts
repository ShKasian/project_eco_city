export type UserModelType = {
  id: number;
  userName: string;
  email: string;
  isAdmin: boolean;
};

export type UserSignUpFormType = Omit<UserModelType, 'id'> & { password: string };
export type UserSigninFormType = Omit<UserSignUpFormType, 'userName'>;

export type UserPrivateCabinetFormType = Omit<UserModelType, 'email'> & { img: string };


export type UserType =
  | (UserModelType & { status: 'logged' })
  | { status: 'loading' }
  | { status: 'guest' };
