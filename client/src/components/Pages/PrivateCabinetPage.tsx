import * as React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Avatar,
  Box,
  Icon,
  Stack,
} from '@mui/material';
import { green } from '@mui/material/colors';
import LoadingButton from '@mui/material/LoadingButton';

type UserProfile = {
  userName: string;
  // Другие данные о пользователе
};

export default function PrivateCabinetPage(): JSX.Element {
  const [userProfile, setUserProfile] = React.useState<UserProfile>({
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
          <Avatar
            //   alt=""
            //   src=""

            sx={{ width: 250, height: 250 }}
          />
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

      <Stack direction="row" spacing={3}>
        <Icon sx={{ color: green[500], fontSize: 32 }} />
      </Stack>

      <Icon className="fa fa-plus-circle" style={{ color: green[500] }} />

      <Stack direction="row" spacing={2}>
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
          Fetch data
        </LoadingButton>
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Save
        </LoadingButton>
      </Stack>



      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveProfile}
        style={{ marginTop: '20px' }}
      >
        Сохранить профиль
      </Button>


    </Container>
  );
}
