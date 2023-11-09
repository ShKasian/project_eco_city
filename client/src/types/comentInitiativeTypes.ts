import type { UserModelType } from './userTypes';

export type CommentInitiativeTypes = {
  id: number;
  img: string;
  name: string;
  body: string;
  createdAt: string;
  User: UserModelType;
  userId: number;
  initiativeId: number;
};

export type CommentInitiativeTypesFormType = Omit<
  CommentInitiativeTypes,
  'id' | 'userId' | 'initiativeId' | 'img' | 'name'
>;
