import { Button } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import { getCategoriesHandlerThunk } from '../../features/redux/thunkActions/categoryThunkActions';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getFactoriesHandlerThunk } from '../../features/redux/thunkActions/factoryThunkActions';
// import * as ymaps from 'yandex-maps';

export default function ReceptionPointsPage(): JSX.Element {
  
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    void dispatch(getFactoriesHandlerThunk());
  }, []);

  const categories = useAppSelector((state) => state.categoriesData);
  console.log(categories,'category');
  
  
  useEffect(() => {
    void dispatch(getCategoriesHandlerThunk());
  }, []);

  const factories = useAppSelector((state)=> state.factoriesData)
  console.log(factories,'factory');



 

  const ymapRef = useRef<ymaps.Map | null>(null);

  const loadMap = (): void => {
    if (typeof ymaps !== 'undefined') {
      ymaps
        .ready()
        .then(() => {
          ymapRef.current = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 10,
          });
          const myMap = ymapRef.current;
          posts.forEach((post) => {
            const placemark = new ymaps.Placemark(
              [post.coordX, post.coordY],
              {
                balloonContentHeader: `<a style="color: black" href ='post/house/${post.id}'> ${post.title}</a>`,
                balloonContentBody: post.description,
              },
              {
                iconLayout: 'default#image',
                iconImageHref: '/img/geo.png',
                iconImageSize: [25, 25],
                iconImageOffset: [-5, -38],
                hintContent: post.title,
              },
            );

            // Добавляем метку на карту
            myMap.geoObjects.add(placemark);
          });
        })
        .catch((error) => {
          console.error('An error ourred while loading the map:', error);
        });
    }
  };

  useEffect(() => {
    loadMap();
  }, []);



  return (
    <Grid container justifyContent="space-between" item xs={7} margin="auto" marginTop={10}>
      <Grid item>
        <Button value="7">Все</Button>
      </Grid>
      <Grid item>
        <Button>Пластик</Button>
      </Grid>
      <Grid item>
        <Button>Стекло</Button>
      </Grid>
      <Grid item>
        <Button>Бумага</Button>
      </Grid>
      <Grid item>
        <Button>Металл</Button>
      </Grid>
      <Grid item>
        <Button>Органика</Button>
      </Grid>
      <Grid item>
        <Button>Электроника</Button>
      </Grid>
      <Grid container marginBottom={3} marginTop={2}>
        <Grid item xs={12}>
          <div id="map" style={{ width: '100%', height: '400px' }} />
        </Grid>
      </Grid>
    </Grid>
  );
}
