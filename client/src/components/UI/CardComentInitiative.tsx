/* eslint-disable import/newline-after-import */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea, CardActions } from '@mui/material';
import type {
  ComentInitiativeTypesFormType,
  ComentInitiativeTypes,
} from 'src/types/comentInitiativeTypes';

export type CardComentPropsType = {
  comentInitiative: ComentInitiativeTypes;
};

export default function CardComentInitiative({
  comentInitiative,
}: CardComentPropsType): JSX.Element {
  return (
    <Card sx={{ maxHeight: 'auto', maxWidth: 600 }}>
      <CardContent>
        <Avatar
          //   alt=""
          // src={`http://localhost:3001/img/${userProfile.userName}`}
          sx={{ width: 20, height: 20 }}
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>

        <Typography variant="h5" component="div">
          ovv
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
