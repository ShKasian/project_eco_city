import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Grid } from '@mui/material';
import style from './style.module.css'

function PhotoCarousel(): JSX.Element {
  
  return (
    <Carousel showArrows showThumbs={false}>
      <Grid className={style.wrapper} style={{ width: '100%', height: '350px' }}>
        <img src='https://i.pinimg.com/736x/9a/d7/11/9ad711607e49e5805dccebb9e5492a22.jpg' alt="Фото 1" />
      </Grid>
      <Grid className="carouselSlide">
        <img src="path/to/image2.jpg" alt="Фото 2" />
      </Grid>
    </Carousel>
  );
}

export default PhotoCarousel;
