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
};

export default function CardInitiative({ initiative }: CardInitiativePropsType): JSX.Element {
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
            {initiative.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {initiative.createdAt}
        </Typography>
      </CardActions>
    </Card>
  );
}

// <Link to={`/initiative/${id}`}>
// </Link>
