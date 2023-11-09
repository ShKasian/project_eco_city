export type NewsByIdType = {
  id: number;
  img: string;
  title: string;
  body: string;
  createdAt: string;
};

export type NewsByIdTypeFormType = Omit<NewsByIdType, 'id'>;
