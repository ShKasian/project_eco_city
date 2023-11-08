import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box } from '@mui/material';

export default function Footer(): JSX.Element {
  return (
    <Box
      component="footer"
        sx={{ backgroundColor: '#4CAF',
        p: 4,
        color: 'white',
      }}
    >
      <Container maxWidth="lg" color='text.white'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom>
              О проекте EcoGorod
            </Typography>
            <Typography fontSize='16px' variant="body2" >
            Наша компания занимается продвижением эко ориентированных инициатив в России. Присоединяйтесь, вместе мы сохраним природу для будущих поколений!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom>
             Наши контакты
            </Typography>
            <Typography fontSize='16px' variant="body2">
            ул. Орджоникидзе, 11, стр. 10, Москва
            </Typography>
            <Typography fontSize='16px' variant="body2">
              EcoGorod@elbrus.com
             <br/>
            </Typography>
            <Typography fontSize='16px'variant="body2">
             Наш представитель в Москве: 
             <br/>
              +7 995 502 79 92 (Артур)
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} >
            <Typography variant="h1" gutterBottom />
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook sx={{ fontSize: '4rem' }} />
            </Link>
            <Link href="https://www.instagram.com/" color="inherit" sx={{ pl: 1, pr: 1 }}>
              <Instagram sx={{ fontSize: '4rem' }}/>
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter sx={{ fontSize: '4rem' }}/>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
