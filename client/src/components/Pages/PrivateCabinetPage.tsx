/* eslint-disable jsx-a11y/label-has-associated-control */
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
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Modal,
  TextField,
  FormControl,
} from '@mui/material';

import type { CardInitiativeFormType } from 'src/types/initiativeTypes';
import { GridItem } from '@chakra-ui/react';
import { addInitiativeThunk } from '../../features/redux/thunkActions/initiativeThunkActions';
import type { PostInputs } from '../../types/userTypes';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { EditPrivateCabinetThunk } from '../../features/redux/thunkActions/userThunkActions';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PrivateCabinetPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user.data);

  const [file, setFile] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const [inputs, setInputs] = useState<CardInitiativeFormType>({
    title: '',
    body: '',
    img: '',
  });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    [dispatch, file],
  );

  useEffect(() => {
    void dispatch(EditPrivateCabinetThunk(user.img));
  }, []);

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Личный кабинет
      </Typography>
      <>
        <Paper elevation={3} sx={{ padding: '16px', marginBottom: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Avatar
                src={`http://localhost:3001/img/${user.img}`}
                alt="User Avatar"
                sx={{ width: '300px', height: '300px' }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h4">Имя пользователя: {user.userName}</Typography>
              <Typography variant="h5">Почта: {user.email}</Typography>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              {/* <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <Button type="submit" variant="outlined" size="large">
                  <Input name="file" type="file" onChange={handleFileChange} />
                  Send
                </Button>
              </form> */}
              <form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                style={{ marginBottom: '1px' }}
              >
                <label
                  htmlFor="file"
                  style={{
                    marginBottom: '10px',
                    display: 'block',
                    cursor: 'pointer',
                    backgroundColor: '#4CAF',
                    color: 'white',
                    padding: '10px 15px 10px 10px',
                    borderRadius: '5px',
                    width: '150px',
                    textAlign: 'center',
                  }}
                >
                  Загрузить фото
                </label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <Button
                  type="submit"
                  style={{
                    marginBottom: '10px',
                    display: 'block',
                    cursor: 'pointer',
                    backgroundColor: '#4CAF',
                    color: 'white',
                    padding: '9px ',
                    borderRadius: '5px',
                    width: '150px',
                    textAlign: 'center',
                  }}
                  size="large"
                >
                  Обновить
                </Button>
              </form>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box display="flex" justifyContent="flex-end" gap={20}>
                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#4CAF' }}
                  onClick={handleOpen}
                >
                  Добавить инициативу
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 400,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: 'white',
                      boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <Grid className="container" justifyContent="center">
                      <Grid item xs={10}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Добавить инициативу
                        </Typography>
                      </Grid>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <FormControl
                          sx={{
                            width: '-webkit-fill-available',
                          }}
                        >
                          <TextField
                            label="Название инициативы"
                            variant="outlined"
                            fullWidth
                            name="title"
                            value={inputs.title}
                            onChange={changeHandler}
                          />
                          <TextField
                            label="Описание"
                            variant="outlined"
                            name="body"
                            fullWidth
                            multiline
                            rows={7}
                            value={inputs.body}
                            onChange={changeHandler}
                          />
                          <TextField
                            label="Картинки"
                            variant="outlined"
                            name="img"
                            fullWidth
                            multiline
                            rows={7}
                            value={inputs.img}
                            onChange={changeHandler}
                          />
                          <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 2, backgroundColor: '#4CAF', color: 'white' }}
                            onClick={() => {
                              dispatch(addInitiativeThunk(inputs))
                                .then(() => handleClose())
                                .catch(console.log);
                            }}
                          >
                            Отправить
                          </Button>
                        </FormControl>
                      </Typography>
                    </Grid>
                  </Box>
                </Modal>
                <Button variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#4CAF' }}>
                  Добавить идею
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={3} sx={{ padding: '16px' }}>
          <Typography variant="h5" gutterBottom>
            Мои инициативы
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Научные исследования: Поддержка научных исследований в области экологии и переработки вторсырья для создания более эффективных и устойчивых технологий."
                secondary="12 октября 2023"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Утилизация отходов: Развитие программы по утилизации отходов для уменьшения загрязнения окружающей среды и повышения уровня переработки."
                secondary="5 сентября 2023"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Экологическое образование: Внедрение экологического образования в школах и учебных заведениях для повышения осведомленности об экологии и переработке вторсырья."
                secondary="30 июля 2023"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Повышение энергоэффективности: Содействие энергосберегающим мероприятиям и технологиям для сокращения потребления энергии и снижения выбросов парниковых газов."
                secondary="18 мая 2023"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Экологически чистый транспорт: Поддержка развития экологически чистых видов транспорта, таких как электрические и водородные автомобили."
                secondary="23 апреля 2023"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Сады и парки: Создание большего количества городских садов и парков для озеленения и повышения качества воздуха."
                secondary="13 марта 2023"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Рециклинг: Расширение программы рециклинга для сбора и переработки вторсырья, такого как бумага, стекло, пластик и металл."
                secondary="30 февраля 2023"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Экологические мероприятия: Организация экологических мероприятий и акций с участием общества для поддержки инициатив по экологии и переработке вторсырья."
                secondary="30 января 2023"
              />
            </ListItem>
            <Divider />
          </List>
        </Paper>
      </>
    </Container>
  );
}

export default React.memo(PrivateCabinetPage);
