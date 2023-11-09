import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import type { CardNewsFormType, CardNewsType } from 'src/types/newsTypes';

export type CardNewsPropsType = {
  news: CardNewsType;
};

const MAX_TEXT_LENGTH = 100;

export default function CardNews({ news }: CardNewsPropsType): JSX.Element {

  const truncatedBody =
    news.body.length > MAX_TEXT_LENGTH
      ? `${news.body.substring(0, MAX_TEXT_LENGTH)}...`
      : news.body;


  return (
    <Card sx={{ margin: '50px 50px 50px 0' }}>
      <CardActionArea>
        <CardMedia sx={{ objectFit: 'cover', height: '250px' }} component="img" image={news.img} />
        <CardContent
         sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '700px',
          maxWidth: '400px',
          margin: '2rem',
          justifyContent: 'space-between',
        }}>
          <Typography gutterBottom variant="h5" component="div">
            {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {news.body}
          </Typography>
          <CardMedia
            sx={{ height: 300 }}
            component="img"
            src={`http://localhost:3001/img${news.img}`}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {news.createdAt}
        </Typography>
      </CardActions>
      <ButtonGroup size="small" aria-label="small button group">
        <Link to={`/news/${news.id}`}>
          <Button variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#4CAF' }}>
            Подробнее
          </Button>
        </Link>
      </ButtonGroup>
    </Card>
  );
}
