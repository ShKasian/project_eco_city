import React from 'react';
import { Box } from '@mui/material';
import { useAppSelector } from '../../hooks/reduxHooks';
import CardFactory from './CardFactory';

function CardFactoryList(): JSX.Element {
  const factories = useAppSelector((state) => state.factoriesData);
  return (
    <Box display="flex" flexWrap="wrap">
      {factories.map((factory) => (
        <CardFactory key={factory.id} factory={factory} />
      ))}
    </Box>
  );
}

export default React.memo(CardFactoryList)