import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import type { OneInitiativeFormType, OneInitiativeType } from '../../types/oneInitiativeTypes';
import OneInitiative from '../UI/OneInitiative';
import AddFormInitiative from '../UI/AddFormInitiative';
import Layout from '../Layout';
import { getOneInitiativeByIdThunk } from '../../features/redux/thunkActions/oneInitiativeThunkActions';
import { Typography } from '@mui/material';

export default function InitiativeComentsPage(): JSX.Element {
  const [isAdmin, setAdminBool] = useState(false);
  const { id } = useParams();
  const initiative = useAppSelector((store) => store.oneInitiative);
  const dispatch = useAppDispatch();
  // const [initiative, setInitiative] = useState<OneInitiativeType | null>(null);

  useEffect(() => {
    void dispatch(getOneInitiativeByIdThunk(Number(id)));
  }, []);
  console.log(initiative);

  return (
    <>
      {initiative && <OneInitiative initiative={initiative} />} {isAdmin && <AddFormInitiative />}
      <Typography variant="body2" color="text.secondary">
        {initiative?.CommentInitiatives[0]?.body}
      </Typography>
    </>
  );
}
