export type UserModelType = {
  id: number;
  username: string;
  email: string;
};

export type UserSignUpFormType = Omit<UserModelType, 'id'> & { password: string }; 
export type UserLoginFormType = Omit<UserSignUpFormType, 'username'>; 

export type UserStatusType =
  | (UserModelType & { status: 'success' })
  | { status: 'loading' }
  | { status: 'guest' };
