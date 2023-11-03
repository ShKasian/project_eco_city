import React, { useState, ChangeEvent, ChangeEventHandler } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch } from 'src/hooks';
// import { updateRestaruntThunk } from '../../redux/slices/restarunts/RestaruntsThunk';
import type { CardNewsType, CardNewsFormType } from '../../types/newsTypes';

type CardNewsEditFormProps = {
  news: CardNewsType;
  toggleEditing: () => void;
};

function RestaruntEditForm({ news, toggleEditing }: CardNewsEditFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<CardNewsFormType>({
    image: news.image,
    title: news.title,
    body: news.body,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      await dispatch(updateNewsThunk({ id: news.id, formData }));
      toggleEditing();
    } catch (error) {
      // Обработка ошибки
    }
  };
  return (
    <Box display="flex" flexDirection="column">
      <TextField
        fullWidth
        name="title"
        variant="outlined"
        margin="normal"
        placeholder="Image"
        value={formData.title}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        name="body"
        variant="outlined"
        margin="normal"
        placeholder="Title"
        value={formData.body}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        name="image"
        variant="outlined"
        margin="normal"
        placeholder="Body"
        value={formData.image}
        onChange={handleInputChange}
      />
      <Button variant="outlined" size="large" onClick={() => handleSubmit}>
        Save
      </Button>
    </Box>
  );
}

export default RestaruntEditForm;
