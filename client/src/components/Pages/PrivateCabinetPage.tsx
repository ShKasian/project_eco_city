import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Avatar,
  Box,
  Fab,
  Tooltip,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import type { UserPrivateCabinetFormType } from '../../types/userTypes';


type UserProfile = {
  userName: UserPrivateCabinetFormType;

  // Другие данные о пользователе
};

type UserPrivateCabinetPageProps = {
  userName: string
};

export default function PrivateCabinetPage(): JSX.Element {
  const [userProfile, setUserProfile] = React.useState<UserPrivateCabinetPageProps>({
    userName: '',
    // Инициализируйте другие данные о пользователе
  });

  const handleSaveProfile = (): void => {
    // Здесь можно добавить логику сохранения данных профиля
  };

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
          <Button >
            <Avatar
              //   alt=""
              // src={`http://localhost:3001/img/${userProfile.userName}`}
              sx={{ width: 250, height: 250 }}
            />
          </Button>

          <Grid item xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="Имя пользователя"
              variant="outlined"
              value={userProfile.userName}
              onChange={(e) => setUserProfile({ ...userProfile, userName: e.target.value })}
            />
          </Grid>
        </Grid>
      </Box>


      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveProfile}
        style={{ marginTop: '20px' }}
      >
        Сохранить профиль
      </Button>

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
