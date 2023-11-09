/* eslint-disable import/newline-after-import */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import type {CommentInitiativeTypes} from '../../types/comentInitiativeTypes';
import { useAppSelector } from '../../features/redux/hooks';
import AddFormComment from './AddFormComment';

export type CardComentPropsType = {
  oneComment: CommentInitiativeTypes;
};

export default function CardCommentInitiative({
  oneComment,
}: CardComentPropsType): JSX.Element {
  const user = useAppSelector((store) => store.user.data);

  return (
<>

{/* <Box display="flex" flexWrap="wrap">
      {initiative.map((el) => (
        <CardInitiative key={el.id} oneInitiative={el} />
      ))}
    </Box> */}

    <Card sx={{ maxHeight: 'auto', maxWidth: 600 }}>
      <CardContent>
        {/* <Avatar
          src={`http://localhost:3001/img/${user.img}`}
          sx={{ width: 30, height: 30 }}
          /> */}

<CardActionArea>
        <CardContent>
        <Typography gutterBottom fontSize='25px' component="div">
            {oneComment?.User?.userName}
          </Typography>
          <Typography gutterBottom fontSize='12px' component="div">
            {oneComment?.body}
          </Typography>
        </CardContent>
      </CardActionArea>

      </CardContent>
      
    </Card>
          </>
  );
}
