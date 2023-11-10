import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { getNewsThunk } from '../../features/redux/thunkActions/newsThunkActions';
import { useAppSelector, useAppDispatch } from '../../features/redux/hooks';
import CardNews from './CardNews';

export default function CardNewsList(): JSX.Element {
  const news = useAppSelector((store) => store.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getNewsThunk());
  }, []);
  return (
    <Grid container margin="auto" justifyContent="center" rowGap={4} columnGap={4}>
      {news.map((newss) => (
        <Grid item xs={5}>
          <CardNews key={newss.id} news={newss} />
        </Grid>
      ))}
    </Grid>
  );
}
