import React from 'react';
import { Box } from '@mui/material';
import CardInitiative from './CardInitiative';

export default function CardInitiativeList(): JSX.Element {
  return (
    <Box display="flex" flexWrap="wrap">
      <CardInitiative />
      <CardInitiative />
      <CardInitiative />
      <CardInitiative />
      <CardInitiative />
    </Box>
  );
}

// const news = useAppSelector((store) => store.news);
