export type UserSubmitType = {
    name?: string;
    email: string;
    password: string;
  };
  
  export type UserResponseType = {
    id: number;
    name: string;
  };
  
  export type UserIdleActionType = { type: 'FETCH_USER_ERROR' };
  
  export type UserLoadingActionType = { type: 'FETCH_USER' };
  
  export type UserSuccsesActionType = {
    type: 'FETCH_USER_SUCCESS';
    payload: UserResponseType;
  };
  
  export type UserReducerTypes =
    | { status: 'idle' }
    | { status: 'fetching' }
    | { status: 'success'; user: UserResponseType };
  
  export type UserReducerType = UserIdleActionType | UserLoadingActionType | UserSuccsesActionType;