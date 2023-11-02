import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import CardInitiative from '../UI/CardInitiative';
import CardInitiativeList from '../UI/CardInitiativeList';

export default function InitiativePage(): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CardInitiative />
      </Grid>
      <Grid item xs={6}>
        <CardInitiativeList />
      </Grid>
    </Grid>
  );
}
