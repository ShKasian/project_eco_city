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

const MAX_TEXT_LENGTH = 100; // Максимальная длина текста, после которой он будет обрезан

export default function CardNews({ news }: CardNewsPropsType): JSX.Element {
  // Обрезаем текст, если его длина больше MAX_TEXT_LENGTH
  const truncatedBody =
    news.body.length > MAX_TEXT_LENGTH
      ? `${news.body.substring(0, MAX_TEXT_LENGTH)}...`
      : news.body;

  return (
    <Card sx={{ maxHeight: 'auto', maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia sx={{ objectFit: 'cover', height: '250px' }} component="img" image={news.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncatedBody}
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
