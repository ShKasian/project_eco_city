import { Button } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
// import * as ymaps from 'yandex-maps';

export default function ReceptionPointsPage(): JSX.Element {
  const ymapRef = useRef<ymaps.Map | null>(null);

  const loadMap = (): void => {
    if (typeof ymaps !== 'undefined') {
      ymaps.ready().then(() => {
        ymapRef.current = new ymaps.Map('map', {
          center: [55.751574, 37.573856],
          zoom: 10,
        });
        const myMap = ymapRef.current;
      }).catch(error => {
        console.error('An error ourred while loading the map:', error);
      });
    }
  };

  useEffect(() => {
    loadMap();
  }, []);

  return (
    <Grid container justifyContent="space-between" xs={7} margin="auto" marginTop={10}>
      <Grid item>
        <Button>Все</Button>
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
