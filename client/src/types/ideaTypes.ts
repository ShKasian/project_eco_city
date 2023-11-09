export type CardIdeaType = {
    id: number;
    title: string;
    img: string;
    body: string;
  };
  
  export type CardIdeaFormType = Omit<CardIdeaType, 'id'>;
  