import * as React from 'react';
import { Container, Typography, Button, Grid, TextField, Avatar } from '@mui/material';

type UserProfile = {
  username: string;
  // Другие данные о пользователе
};

export default function PrivateCabinetPage(): JSX.Element {
  const [userProfile, setUserProfile] = React.useState<UserProfile>({
    username: '',
    // Инициализируйте другие данные о пользователе
  });

  const handleSaveProfile = (): void => {
    // Здесь можно добавить логику сохранения данных профиля
  };

  return (
      <Container  maxWidth="md" >
      <Typography color='greenyellow' mt='55px' variant="h4" align="center" gutterBottom>
        Личный кабинет
      </Typography>
    <Avatar
//   alt=""
//   src=""

  sx={{ width: 250, height: 250 }}
/>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
          margin='normal'
            fullWidth
            label="Имя пользователя"
            variant="outlined"
            value={userProfile.username}
            onChange={(e) => setUserProfile({ ...userProfile, username: e.target.value })}
          />
        </Grid>
      </Grid>
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
