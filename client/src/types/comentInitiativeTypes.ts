export type ComentInitiativeTypes = {
  id: number;
  img: string;
  name: string;
  body: string;
  createdAt: string;
};

export type ComentInitiativeTypesFormType = Omit<ComentInitiativeTypes, 'id'>;
