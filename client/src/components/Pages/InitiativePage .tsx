import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import CardInitiative from '../UI/CardInitiative';
import CardInitiativeList from '../UI/CardInitiativeList';
import { getInitiativeThunk } from '../../features/redux/thunkActions/initiativeThunkActions';
import { useAppDispatch } from '../../features/redux/hooks';

export default function InitiativePage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getInitiativeThunk());
  }, []);

  return <CardInitiativeList />;
}
