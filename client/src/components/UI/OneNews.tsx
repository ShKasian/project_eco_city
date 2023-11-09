import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import type { NewsByIdTypeFormType, NewsByIdType } from 'src/types/NewsByIdType';

export type NewsByIdTypePropsType = {
  news: NewsByIdType;
};

export default function OneNews({ news }: NewsByIdTypePropsType): JSX.Element {
  const { id } = useParams();
  if (!news) return <h1> news dont have</h1>;
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
