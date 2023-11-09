import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
  Box,
  Fab,
  Tooltip,
  Input,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import type { PostInputs, PrivateCabinetType } from '../../types/userTypes';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  getProfileThunk,
  EditPrivateCabinetThunk,
} from '../../features/redux/thunkActions/userThunkActions';

function PrivateCabinetPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user.data);

  const [file, setFile] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement & PostInputs>): void => {
      e.preventDefault();
      if (!file) {
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      void dispatch(EditPrivateCabinetThunk(formData));
    },
    [dispatch, file]
  );

  useEffect(() => {
    void dispatch(EditPrivateCabinetThunk(user.img));
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Личный кабинет
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Grid container>
          <Button>
            <Avatar
              src={`http://localhost:3001/img/${user.img}`}
              sx={{ width: 250, height: 250 }}
            />
          </Button>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h4" align="center">
                Имя пользователя: {user.userName}
              </Typography>
              <Typography variant="h5" align="center">
                Email: {user.email}
              </Typography>
            </Box>
          </Grid>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <Button type="submit" variant="outlined" size="large">
              <Input name="file" type="file" onChange={handleFileChange} />
              Send
            </Button>
          </form>
        </Grid>
      </Box>
      <Box style={{ display: 'flex' }} mt="45px">
        <Button aria-multiline>
          <Tooltip title="Добавить инициативу" aria-label="add">
            <Fab color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
          </Tooltip>
        </Button>
      </Box>
    </Container>
  )
}

export default React.memo(PrivateCabinetPage);
