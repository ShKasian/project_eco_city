import React, { useCallback, useState } from 'react';
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
import type { PrivateCabinetFormType } from '../../types/userTypes';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { EditPrivateCabinetThunk } from '../../features/redux/thunkActions/userThunkActions';

// type UserPrivateCabinetPageProps = {
//   userName: string
// };

type PrivateCabinetProps = {
  user: PrivateCabinetFormType;
};

export default function PrivateCabinetPage({ user }: PrivateCabinetProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [userProfile, setUserProfile] = useState<PrivateCabinetFormType>({
    userName: user?.userName || '',
    img: user?.img || '',
    email: user?.email || '',
  });

  const [file, setFile] = useState<PrivateCabinetFormType>();

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitAvatar = useCallback((e: React.FormEvent<HTMLFormElement & >): void => {
    e.preventDefault();
    console.log(e);

    const formData = new FormData();
    formData.append('file', e.target.input.value);
    void dispatch(EditPrivateCabinetThunk(formData));
  }, []);

  return (
    <Container maxWidth="md">
      <Typography color="greenyellow" mt="55px" variant="h4" align="center" gutterBottom>
        Личный кабинет
      </Typography>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Grid container spacing={2}>
          <Button>
            <Avatar
              //   alt=""
              src={
                userProfile.img
                  ? `http://localhost:3001/img/${userProfile.img}`
                  : `http://localhost:3001/img/admin.png`
              }
              sx={{ width: 250, height: 250 }}
            />
          </Button>

          <form onSubmit={submitAvatar}>
            <Button
              type="submit"
              variant="outlined"
              size="large"
              // onClick={() => void dispatch(EditPrivateCabinetThunk(userProfile))}
            >
              <Input name="img" type="file" />
              Send
            </Button>
          </form>
          <Grid item xs={12}>
            <Typography color="greenyellow" mt="55px" variant="h4" align="center" gutterBottom>
              {userProfile.email}dv d
            </Typography>
            <Typography color="greenyellow" mt="55px" variant="h4" align="center" gutterBottom>
              {userProfile.email}
            </Typography>
          </Grid>
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
  );
}
