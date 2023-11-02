import React, { useEffect } from 'react';

import { Grid } from '@mui/material';
import CardNews from '../UI/CardNews';
import CardNewsList from '../UI/CardNewsList';

export default function NewsPage(): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CardNews />
      </Grid>
      <Grid item xs={6}>
        <CardNewsList />
      </Grid>
    </Grid>
  );
}
