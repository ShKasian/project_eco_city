import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import type { CardNewsFormType } from 'src/types/newsTypes';
import { useAppDispatch } from '../../hooks';

export default function AddNewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [inputs, setInputs] = useState<CardNewsFormType>({ image: '', title: '', body: '' });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        fullWidth
        name="image"
        variant="outlined"
        margin="normal"
        placeholder="Image"
        value={inputs.image}
        onChange={changeHandler}
      />
      <TextField
        fullWidth
        name="title"
        variant="outlined"
        margin="normal"
        placeholder="Title"
        value={inputs.title}
        onChange={changeHandler}
      />
      <TextField
        fullWidth
        name="body"
        variant="outlined"
        margin="normal"
        placeholder="Body"
        value={inputs.body}
        onChange={changeHandler}
      />
      <Box mt={2}>
        <Button variant="outlined" size="large">
          Send
        </Button>
      </Box>
    </Box>
  );
}
