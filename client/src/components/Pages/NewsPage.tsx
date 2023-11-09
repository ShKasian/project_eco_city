import React, { useEffect } from 'react';

import { Grid } from '@mui/material';
import CardNews from '../UI/CardNews';
import CardNewsList from '../UI/CardNewsList';
import { useAppDispatch } from '../../features/redux/hooks';
import { getNewsThunk } from '../../features/redux/thunkActions/newsThunkActions';

export default function NewsPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getNewsThunk());
  }, []);

  return <CardNewsList />;
}
