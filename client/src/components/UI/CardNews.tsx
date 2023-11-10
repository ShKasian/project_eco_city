import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Grid, Paper } from '@mui/material';
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
    <Paper>
      <Grid
        container
        flexDirection="column"
        xs={12}
        alignItems="center"
        justifyContent="space-around"
        padding={2}
      >
        <Grid item xs={12}>
          <CardMedia
            sx={{ objectFit: 'contain', height: '250px' }}
            component="img"
            image={news.img}
          />
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h5">
            {news.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="text.secondary">
            {news.body}
          </Typography>
        </Grid>
        <Grid item>
          <p> {new Date(news.createdAt).toLocaleString()}</p>
        </Grid>
        <Grid item>
          <Link to={`/news/${news.id}`}>
            <Button variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#4CAF' }}>
              Подробнее
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}
