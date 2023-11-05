import React, { useState, ChangeEvent, ChangeEventHandler } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { updateNewsThunk } from '../../features/redux/thunkActions/newsThunkActions';
import type { CardNewsType, CardNewsFormType } from '../../types/newsTypes';
import { useAppDispatch } from '../../features/redux/hooks';

type CardNewsEditFormProps = {
  news: CardNewsType;
  toggleEditing: () => void;
};

function NewsEditForm({ news, toggleEditing }: CardNewsEditFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<CardNewsFormType>({
    image: news.img,
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
    } catch (error) {}
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        fullWidth
        name="img"
        variant="outlined"
        margin="normal"
        placeholder="Img"
        value={formData.img}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        name="title"
        variant="outlined"
        margin="normal"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        name="body"
        variant="outlined"
        margin="normal"
        placeholder="Body"
        value={formData.body}
        onChange={handleInputChange}
      />
      <Button variant="outlined" size="large" onClick={() => handleSubmit}>
        Save
      </Button>
    </Box>
  );
}

export default NewsEditForm;
