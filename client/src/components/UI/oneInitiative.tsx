import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import type { OneInitiativeType, OneInitiativeFormType } from '../../types/oneInitiativeTypes';
import type {} from '../../types/initiativeTypes';

export type OneInitiativeTypePropsType = {
  initiative: OneInitiativeType;
};

export default function CardInitiative({ initiative }: OneInitiativeTypePropsType): JSX.Element {
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
