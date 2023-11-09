import React, {useEffect} from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { getIdeaThunk } from '../../features/redux/thunkActions/ideaThunkAction';
import CardIdeaList from '../UI/CardIdeaList';
import PhotoCarousel from '../UI/PhotoCarousel/Carousel';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

    // user?.isAdmin === true &&(
    // <div>I am Admin</div>
    // )

    useEffect(() => {
      void dispatch(getIdeaThunk());
    }, []);

    return (
      <>
    <PhotoCarousel />
    <CardIdeaList /> 
    </>
    )
  
}
