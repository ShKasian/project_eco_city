import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { getInitiativeThunk } from '../../features/redux/thunkActions/initiativeThunkActions';
import { useAppSelector, useAppDispatch } from '../../features/redux/hooks';
import CardInitiative from './CardInitiative';

export default function CardInitiativeList(): JSX.Element {
  const initiative = useAppSelector((store) => store.initiative);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getInitiativeThunk());
  }, []);
  console.log(initiative);
  return (
    <Box display="flex" flexWrap="wrap">
      {initiative.map((initiatives) => (
        <CardInitiative key={initiatives.id} initiative={initiatives} />
      ))}
    </Box>
  );
}
