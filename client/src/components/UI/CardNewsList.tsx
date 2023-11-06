import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { getNewsThunk } from '../../features/redux/thunkActions/newsThunkActions';
import { useAppSelector, useAppDispatch } from '../../features/redux/hooks';
import CardNews from './CardNews';

export default function CardNewsList(): JSX.Element {
  const news = useAppSelector((store) => store.news);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   void dispatch(getNewsThunk());
  // }, []);
  return (
    <Box display="flex" flexWrap="wrap">
      {news.map((newss) => (
        <CardNews key={newss.id} news={newss} />
      ))}
    </Box>
  );
}
