import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Paper, Grid } from '@mui/material';
import type { CardInitiativeType, CardInitiativeFormType } from '../../types/initiativeTypes';

export type CardInitiativePropsType = {
  oneInitiative: CardInitiativeType;
  maxTextLength?: number;
};

export default function CardInitiative({
  oneInitiative,
  maxTextLength = 100,
}: CardInitiativePropsType): JSX.Element {
  const truncatedBody =
    oneInitiative.body?.length > maxTextLength
      ? `${oneInitiative.body.slice(0, maxTextLength)}...`
      : oneInitiative.body;

  return (
    // <Card sx={{ maxHeight: 'auto', maxWidth: 600 }}>
    //   <CardActionArea>
    //     <CardMedia
    //       sx={{ objectFit: 'cover', height: '250px' }}
    //       component="img"
    //       image={oneInitiative.img}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {oneInitiative.title}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {truncatedBody}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Typography variant="body2" color="text.secondary">
    //       {new Date(oneInitiative.createdAt).toLocaleString()}

    //     </Typography>
    //   </CardActions>
    //   <ButtonGroup size="small" aria-label="small button group">
    //     <Link to={`/initiative/${oneInitiative.id}`}>
    //       <Button variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#4CAF' }}>
    //         Подробнее
    //       </Button>
    //     </Link>
    //   </ButtonGroup>
    // </Card>

    <Paper>
      <Grid
        container
        flexDirection="column"
        xs={12}
        alignItems="center"
        justifyContent="space-around"
        // padding={2}
      >
        <Grid item xs={12}>
          <CardMedia
            sx={{ height: '250px', width: '100%' }}
            component="img"
            image={oneInitiative.img}
          />
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h5" component="div">
            {oneInitiative.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="text.secondary">
            {truncatedBody}
          </Typography>
        </Grid>
        <Grid item>
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              {new Date(oneInitiative.createdAt).toLocaleString()}
            </Typography>
          </CardActions>
        </Grid>
        <Grid item>
          <Link to={`/initiative/${oneInitiative.id}`}>
            <Button variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#4CAF' }}>
              Подробнее
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}
