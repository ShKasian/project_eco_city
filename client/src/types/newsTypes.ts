export type CardNewsType = {
  id: number;
  img: string;
  title: string;
  body: string;
  createdAt: Date;
};

export type CardNewsFormType = Omit<CardNewsType, 'id'>;
