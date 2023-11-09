import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import type { NewsByIdTypeFormType, NewsByIdType } from '../types/NewsByIdType';
import apiService from './apiService';
import OneNews from '../UI/OneNews';
import AddFormNews from '../UI/AddFormInitiative';
import { getOneNewsByIdThunk } from '../../features/redux/thunkActions/newsByIdThunkActions';

export default function OneNewsPage(): JSX.Element {
  const [isAdmin, setAdminBool] = useState(false);
  const { id } = useParams();
  const news = useAppSelector((store) => store.oneNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getOneNewsByIdThunk(Number(id)));
  }, []);
  console.log(news);

  return (
    <>
      {news && <OneNews news={news} />} {isAdmin && <AddFormNews />}
    </>
  );
}
