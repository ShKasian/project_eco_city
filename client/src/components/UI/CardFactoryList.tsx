import React from 'react';
import { Box, Grid } from '@mui/material';
import { useAppSelector } from '../../hooks/reduxHooks';
import CardFactory from './CardFactory';

function CardFactoryList(): JSX.Element {
  const factories = useAppSelector((state) => state.factoriesData);
  return (
    // <Box display="flex" flexWrap="wrap">
    <Grid container justifyContent="space-around">
      {factories.map((factory) => (
        <Grid item>
          <CardFactory key={factory.id} factory={factory} />
        </Grid>
      ))}
    </Grid>
    // </Box>
  );
}

export default React.memo(CardFactoryList);
