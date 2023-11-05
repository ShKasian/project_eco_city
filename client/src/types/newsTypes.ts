export type CardNewsType = {
  id: number;
  img: string;
  title: string;
  body: string;
};

export type CardNewsFormType = Omit<CardNewsType, 'id'>;
