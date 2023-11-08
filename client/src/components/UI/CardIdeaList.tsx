import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { getIdeaThunk } from '../../features/redux/thunkActions/ideaThunkAction'
import { useAppSelector, useAppDispatch } from '../../features/redux/hooks';
import CardIdea from './CardIdea';


export default function CardIdeaList(): JSX.Element {
  const ideas = useAppSelector((store) => store.ideas);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getIdeaThunk());
  }, []);
  
  return (
    <Grid display="flex" flexWrap="wrap" justify-content="space-between">
      {ideas.map((idea) => (
        <CardIdea key={idea.id} ideas={idea} />
      ))}
    </Grid>
  );
}
