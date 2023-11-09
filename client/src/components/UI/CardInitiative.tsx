import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import type { CardInitiativeType, CardInitiativeFormType } from '../../types/initiativeTypes';

export type CardInitiativePropsType = {
  initiative: CardInitiativeType;
  maxTextLength?: number;
};

export default function CardInitiative({
  initiative,
  maxTextLength = 100,
}: CardInitiativePropsType): JSX.Element {
  const truncatedBody =
    initiative.body.length > maxTextLength
      ? `${initiative.body.slice(0, maxTextLength)}...`
      : initiative.body;

  return (
    <Card sx={{ maxHeight: 'auto', maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: 'cover', height: '250px' }}
          component="img"
          image={initiative.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {initiative.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncatedBody}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
        {new Date(initiative.createdAt).toLocaleString()}
        </Typography>
      </CardActions>
    </Card>
  );
}
