import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { FactoryModelTypes } from 'src/types/factoryTypes';

export type FactoryPropsTypes = {
  factory: FactoryModelTypes;
};

 function CardFactory({factory}: FactoryPropsTypes): JSX.Element {
  return (
    <Card sx={{ maxWidth: 309 }}>
      <CardMedia
        sx={{ height: 140 }}
        component="img" 
        src={`http://localhost:3001/img${factory.img}`}
     
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {factory.name}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default React.memo(CardFactory)