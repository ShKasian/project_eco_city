import React, { useEffect } from 'react';
import { Grid } from '@mui/material';

import { getInitiativeThunk } from '../../features/redux/thunkActions/initiativeThunkActions';
import { useAppSelector, useAppDispatch } from '../../features/redux/hooks';
import CardInitiative from './CardInitiative';

export default function CardInitiativeList(): JSX.Element {
  const initiative = useAppSelector((store) => store.initiative);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getInitiativeThunk());
  }, []);
  // console.log(initiative);
  return (
    <Grid container margin="50px auto" wrap="wrap" justifyContent="center" rowGap={4} columnGap={4}>
      {initiative.map((el) => (
        <Grid item xs={4}>
          <CardInitiative key={el.id} oneInitiative={el} />
        </Grid>
      ))}
    </Grid>
  );
}
