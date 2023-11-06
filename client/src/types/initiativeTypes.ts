export type CardInitiativeType = {
  id: number;
  img: string;
  title: string;
  body: string;
};

export type CardInitiativeFormType = Omit<CardInitiativeType, 'id'>;
