import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import type { CardIdeaType } from 'src/types/ideaTypes';
import { getIdeaThunk } from '../../features/redux/thunkActions/ideaThunkAction';
import { useAppSelector, useAppDispatch } from '../../features/redux/hooks';
import CardIdea from './CardIdea';

export default function CardIdeaList(): JSX.Element {
  const ideas = useAppSelector((store) => store.ideas as CardIdeaType[]); 
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getIdeaThunk());
  }, []);

  return (
    <Grid container display="flex" justifyContent="center">
      {ideas.map((idea) => (
        <Grid item key={idea.id}>
          <CardIdea ideas={idea} />
        </Grid>
      ))}
    </Grid>
  );
}
