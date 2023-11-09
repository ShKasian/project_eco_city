import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import style from './style.module.css';

function PhotoCarousel(): JSX.Element {
  return (
    <Carousel showArrows showThumbs={false}>

      <div
        className={style.wrapper}
        style={{ width: '100%', height: '450px', position: 'relative' }}
      >
        <img src="http://localhost:3001/img/EcoGorod.jpeg" alt="Фото 2" />
        <div
          className={style.innerText}
          style={{ position: 'absolute', top: 85, left: 280, color: '#5F6075', padding: '10px' }}
        >
          EcoGorod - здесь природа и люди в гармонии
        </div>
      </div>
    </Carousel>
  );
}

export default PhotoCarousel;
