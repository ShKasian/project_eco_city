import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import type { FactoryModelTypes as MyFactoryModel } from 'src/types/factoryTypes';
// import ymaps from 'yandex-maps';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  getFactoriesHandlerThunk,
  getFilterFactoryHandlerThunk,
} from '../../features/redux/thunkActions/factoryThunkActions';
import CardFactoryList from '../UI/CardFactoryList';

function ReceptionPointsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const factories = useAppSelector((state) => state.factoriesData);
  const ymapRef = useRef<ymaps.Map | null>(null);
  const [posts, setPosts] = useState<MyFactoryModel[]>([]); // Добавляем состояние для отображения меток
  const [showFactories, setShowFactories] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('7'); // Изначально выбрана категория '7' (Все)

  useEffect(() => {
    void dispatch(getFactoriesHandlerThunk());
  }, []);

  const loadMarkers = (factory: MyFactoryModel[]): void => {
    // Добавляем параметр factory
    if (ymapRef.current !== null) {
      ymapRef.current.geoObjects.removeAll(); // Удаляем все метки с карты
      factory.forEach((post) => {
        const placemark = new ymaps.Placemark([post.coordX, post.coordY], {
          balloonContentHeader: `<a style="color: black" href='api/factory/${post.categoryId}'> ${post.name}</a>`,
          iconLayout: 'default#image',
          iconImageHref: '/img/geo.png',
          iconImageSize: [25, 25],
          iconImageOffset: [-5, -38],
          hintContent: post.name,
        });
        if (ymapRef.current) {
          ymapRef.current.geoObjects.add(placemark);
        }
      });
    }
  };

  const loadMap = (): void => {
    if (typeof ymaps !== 'undefined') {
      ymaps
        .ready()
        .then(() => {
          ymapRef.current = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 10,
          });
          loadMarkers(factories); // Загружаем метки с фабриками из хранилища
        })
        .catch((error) => {
          console.error('An error occurred while loading the map:', error);
        });
    }
  };

  useEffect(() => {
    if (factories.length) {
      // Добавляем проверку на наличие фабрик
      loadMap();
    }
  }, []); // Добавляем зависимость factories

  useEffect(() => {
    ymapRef.current?.destroy();
    loadMap();
  }, [factories]);

  const filterHandler = async (value: string): Promise<void> => {
    setSelectedCategory(value);
    if (value === '7') {
      setPosts(factories); // Отображаем все фабрики
      loadMarkers(factories); // Обновляем метки на карте
      await dispatch(getFactoriesHandlerThunk());
    } else {
      void dispatch(getFilterFactoryHandlerThunk(value));
      setPosts(factories); // Отображаем только выбранные фабрики
      loadMarkers(factories); // Обновляем метки на карте
    }
    // Установите состояние, чтобы скрыть/показать карточки заводов
    setShowFactories(value === '7');
  };

  return (
    <Grid container justifyContent="space-between" item xs={7} margin="auto" marginTop={10}>
      <Grid item>
        <Button onClick={() => void filterHandler('7')}>Все</Button>
      </Grid>
      <Grid item>
        <Button onClick={() => void filterHandler('1')}>Пластик</Button>
      </Grid>
      <Grid item>
        <Button onClick={() => void filterHandler('2')}>Стекло</Button>
      </Grid>
      <Grid item>
        <Button onClick={() => void filterHandler('3')}>Бумага</Button>
      </Grid>
      <Grid item>
        <Button onClick={() => void filterHandler('4')}>Металл</Button>
      </Grid>
      <Grid item>
        <Button onClick={() => void filterHandler('5')}>Органика</Button>
      </Grid>
      <Grid item>
        <Button onClick={() => void filterHandler('6')}>Электроника</Button>
      </Grid>
      <Grid container marginBottom={3} marginTop={2}>
        <Grid item xs={12}>
          <div id="map" style={{ width: '100%', height: '400px' }} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CardFactoryList />
      </Grid>
    </Grid>
  );
}

export default React.memo(ReceptionPointsPage);
