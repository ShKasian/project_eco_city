export type OneInitiativeType = {
  id: number;
  img: string;
  title: string;
  body: string;
  createdAt: string;
};

export type OneInitiativeFormType = Omit<OneInitiativeType, 'id'>;
