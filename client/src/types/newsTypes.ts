export type CardNewsType = {
  id: number;
  img: string;
  title: string;
  body: string;
  createdAt: string;
};

export type CardNewsFormType = Omit<CardNewsType, 'id'>;
