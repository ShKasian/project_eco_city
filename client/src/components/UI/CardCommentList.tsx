import React, { useEffect } from 'react';
import { Grid } from '@mui/material';

import { useParams } from 'react-router-dom';
import { getCommentsThunk } from '../../features/redux/thunkActions/commentThunkAction';
import { useAppSelector, useAppDispatch } from '../../features/redux/hooks';
import CardCommentInitiative from './CardComentInitiative';

export default function CardCommentList(): JSX.Element {
  const comment = useAppSelector((store) => store.comment);
  const dispatch = useAppDispatch();

  const { id } = useParams();
  console.log(comment);

  useEffect(() => {
    void dispatch(getCommentsThunk(Number(id)));
  }, []);
  return (
    <Grid container xs={12} flexDirection="column" rowGap={3} marginTop={4}>
      {comment.map((el) => (
        <Grid item xs={4.5}>
          <CardCommentInitiative key={el.id} oneComment={el} />
        </Grid>
      ))}
    </Grid>
  );
}
