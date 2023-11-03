export type CardNewsType = {
  id: number;
  image: string;
  title: string;
  body: string;
};

export type CardNewsFormType = Omit<CardNewsType, 'id'>;
