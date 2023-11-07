import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import type { CardInitiativeFormType } from 'src/types/initiativeTypes';
import { useAppDispatch } from '../../features/redux/hooks';

export default function AddNewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [inputs, setInputs] = useState<CardInitiativeFormType>({
    img: '',
    title: '',
    body: '',
    createdAt: '',
  });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        fullWidth
        name="img"
        variant="outlined"
        margin="normal"
        placeholder="Img"
        value={inputs.img}
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
      <TextField
        fullWidth
        name="createdAt"
        variant="outlined"
        margin="normal"
        placeholder="CreatedAt"
        value={inputs.createdAt}
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
