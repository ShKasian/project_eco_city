import { useParams } from 'react-router-dom';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { addCommentThunk } from '../../features/redux/thunkActions/commentThunkAction';
import type {
  CommentInitiativeTypes,
  CommentInitiativeTypesFormType,
} from '../../types/comentInitiativeTypes';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';

export default function AddFormComment(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user.data);
  const [inputs, setInputs] = useState<CommentInitiativeTypesFormType>({
    body: '',
    createdAt: '',
  });

  const { id } = useParams();

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Card sx={{ maxHeight: 'auto', maxWidth: 600 }}>
      <Box display="flex" flexDirection="column">
        <TextField
          fullWidth
          name="body"
          variant="outlined"
          margin="normal"
          placeholder="Введите комментарий"
          value={inputs.body}
          onChange={changeHandler}
        />
        <Box mt={2}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              void dispatch(addCommentThunk({ id: Number(id), formData: inputs  }));
              setInputs({ body: ''});
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
