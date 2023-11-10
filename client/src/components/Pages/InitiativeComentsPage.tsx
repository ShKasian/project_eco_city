import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import type { OneInitiativeFormType, OneInitiativeType } from '../../types/oneInitiativeTypes';
import OneInitiative from '../UI/OneInitiative';
import AddFormInitiative from '../UI/AddFormInitiative';
import Layout from '../Layout';
import { getOneInitiativeByIdThunk } from '../../features/redux/thunkActions/oneInitiativeThunkActions';
import AddFormComment from '../UI/AddFormComment';
import CardCommentInitiative from '../UI/CardComentInitiative';
import CardCommentList from '../UI/CardCommentList';

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
      {/* {initiative && <OneInitiative initiative={initiative} />} {isAdmin && <AddFormInitiative />} */}
      {/* <Typography variant="body2" color="text.secondary">
        {initiative?.CommentInitiatives[0]?.body}
      </Typography> */}
      {/* <CardCommentInitiative /> */}
      <Grid container xs={12} flexDirection="column" margin={5}>
        <Grid item>
          {initiative && <OneInitiative initiative={initiative} />}{' '}
          {isAdmin && <AddFormInitiative />}
        </Grid>
        <Grid item>
          <CardCommentList />
        </Grid>
        <Grid item>
          <AddFormComment />
        </Grid>
      </Grid>
    </>
  );
}
