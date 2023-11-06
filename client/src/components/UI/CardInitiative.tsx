import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function CardInitiative({}): JSX.Element {
  return (
    <Link to={`/initiative/${id}`}>
      <Card sx={{ maxHeight: 'auto', maxWidth: 600 }}>
        <CardActionArea>
          <CardMedia sx={{ objectFit: 'cover', height: '250px' }} component="img" image="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              initiative
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="body2" color="text.secondary">
            Date
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
}
