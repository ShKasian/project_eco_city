/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  CardActionArea,
  CardMedia,
  Container,
  FormControlLabel,
  Grid,
  Switch,
} from '@mui/material';
import styled from '@mui/system/styled';

import type { CardIdeaType } from '../../types/ideaTypes';

export type CardIdeaPropsType = {
  ideas: CardIdeaType;
};

const IOSSwitch = styled(
  (
    props, 
  ) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />,
)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    // '&.Mui-disabled .MuiSwitch-thumb': {
    //   color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    // },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    // transition: theme.transitions.create(['background-color'], {
    //   duration: 500,
    // }),
  },
}));

function CardIdea({ ideas }: CardIdeaPropsType): JSX.Element {
  return (
    <Card sx={{ margin: '50px 50px 50px 0' }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '700px',
            maxWidth: '400px',
            margin: '2rem',
            justifyContent: 'space-between',
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {ideas.title}
          </Typography>
          <CardMedia
            sx={{ height: 300 }}
            component="img"
            src={`http://localhost:3001/img${ideas.img}`}
          />
          <Typography variant="body2" color="text.secondary" component="div">
            {ideas.body}
          </Typography>
          {/* <Container
          maxWidth="sm"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',
          }}
        > */}
          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label="Проголосовать за идею" />
          {/* </Container> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardIdea;
