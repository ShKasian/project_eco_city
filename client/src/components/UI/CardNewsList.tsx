import React from 'react';
import { Box } from '@mui/material';
import CardNews from './CardNews';

export default function CardNewsList(): JSX.Element {
  return (
    <Box display="flex" flexWrap="wrap">
      <CardNews />
      <CardNews />
      <CardNews />
      <CardNews />
      <CardNews />
      <CardNews />
    </Box>
  );
}

// const news = useAppSelector((store) => store.news);
