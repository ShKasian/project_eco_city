import React, { useEffect } from 'react';
import { Box, Card } from '@mui/material';

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
    <Box display="flex" flexWrap="wrap">
      {comment.map((el) => (
        <CardCommentInitiative key={el.id} oneComment={el} />
      ))}
    </Box>
  );
}
