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
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
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
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Личный кабинет
      </Typography>

      <Paper elevation={3} sx={{ padding: '16px', marginBottom: '16px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Avatar src="url_to_avatar_image.jpg" alt="User Avatar" sx={{ width: '100px', height: '100px' }} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">Имя пользователя</Typography>
            <Typography variant="subtitle1">user@example.com</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: '16px' }}>
        <Typography variant="h5" gutterBottom>
          Мои инициативы
        </Typography>
        <List>
          <ListItem button>
            <ListItemText primary="Заказ #1" secondary="12 октября 2023" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Заказ #2" secondary="5 сентября 2023" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Заказ #3" secondary="30 июля 2023" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  )
}
