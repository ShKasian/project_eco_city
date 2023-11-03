export type CardInitiativeType = {
  id: number;
  image: string;
  title: string;
  body: string;
};

export type CardInitiativeFormType = Omit<CardInitiativeType, 'id'>;
