/* eslint-disable import/newline-after-import */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import type { CardNewsFormType, CardNewsType } from 'src/types/newsTypes';

export type CardNewsPropsType = {
  news: CardNewsType;
};

export default function CardNews({ news }: CardNewsPropsType): JSX.Element {
  return (
    <Card sx={{ maxHeight: 'auto', maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia sx={{ objectFit: 'cover', height: '250px' }} component="img" image={news.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {news.createdAt}
        </Typography>
      </CardActions>
    </Card>
  );
}
