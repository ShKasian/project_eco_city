export type CardInitiativeType = {
  id: number;
  img: string;
  title: string;
  body: string;
  createdAt: string;
};

export type CardInitiativeFormType = Omit<CardInitiativeType, 'id'>;
