import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import type { UserType } from '../../types/userTypes';
import type { CommentInitiativeTypes } from '../../types/comentInitiativeTypes';
import { useAppDispatch } from '../../features/redux/hooks';

type CommentItemProps = {
  comment: CommentInitiativeTypes;
  user: UserType;
  handleClickOpen: (id: number) => void;
};
function CommentItem({ comment, user, handleClickOpen }: CommentItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: '10px' }}>
      <div style={{ display: 'flex' }}>
        <div>
          <Avatar alt="Remy Sharp" src={`http://localhost:3001/img/${comment.User?.img}`} />
        </div>
        <div>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {comment.User?.username}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {comment.body}
            </Typography>
          </CardContent>
          {/* {user.status === 'logged' && user?.email === comment.User?.email && (
            <Button
              size="small"
              onClick={() => void dispatch(deleteCommentThunk({ id: comment.id }))}
            >
              delete
            </Button>
          )} */}
        </div>
      </div>

      {/* {user.id !== comment.userId && (
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            handleClickOpen(comment.id);
          }}
        >
          Пожаловаться
        </Button>
      )} */}
    </Card>
  );
}

export default CommentItem;
