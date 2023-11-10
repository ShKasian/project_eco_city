import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import type { CommentInitiativeTypes } from '../../types/comentInitiativeTypes';
import { useAppSelector, useAppDispatch } from '../../features/redux/hooks';
import { deleteCommentThunk } from '../../features/redux/thunkActions/commentThunkAction';
// import AddFormComment from './AddFormComment';e

export type CardComentPropsType = {
  oneComment: CommentInitiativeTypes;
};

export default function CardCommentInitiative({ oneComment }: CardComentPropsType): JSX.Element {
  const user = useAppSelector((store) => store.user.data);
  const dispatch = useAppDispatch();
  // const commentDel = useAppSelector((state) => state.comment);

  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: '10px' }}>
      <CardContent>
        <Avatar src={`http://localhost:3001/img/${user.img}`} sx={{ width: 30, height: 30 }} />
        <Typography gutterBottom fontSize="25px" component="div">
          {oneComment?.User?.userName}
        </Typography>
        <Typography gutterBottom fontSize="12px" component="div">
          {oneComment?.body}
        </Typography>
        <Button onClick={() => void dispatch(deleteCommentThunk(oneComment.id))}>Удалить</Button>
      </CardContent>
    </Card>
  );
}
