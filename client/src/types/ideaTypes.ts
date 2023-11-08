export type CardIdeaType = {
    id: number;
    title: string;
    body: string;
  };
  
  export type CardIdeaFormType = Omit<CardIdeaType, 'id'>;
  