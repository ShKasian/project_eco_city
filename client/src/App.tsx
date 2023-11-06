import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ReceptionPointsPage from './components/Pages/ReceptionPointsPage';
import MainPage from './components/Pages/MainPage';
import Layout from './components/Layout';
import SignUpPage from './components/Pages/SignUpPage';
import SignInPage from './components/Pages/SignInPage';
import NewsPage from './components/Pages/NewsPage';
import InitiativePage from './components/Pages/InitiativePage ';
import PrivateCabinetPage from './components/Pages/PrivateCabinetPage';
import PrivateRouter from './components/hoks/PrivateRouter';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { checkUserThunk } from './features/redux/thunkActions/userThunkActions';
// import InitiativeComentsPage from './components/Pages/InitiativeComentsPage';


export default function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(checkUserThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

const user = useAppSelector((store) => store.user.data);


  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<MainPage />} />
      <Route element={<PrivateRouter isAllowed={user.status === 'guest'} redirect='/signup' />} /> 
        <Route path="/news" element={<NewsPage />} />
        <Route path="/lk/:id" element={<PrivateCabinetPage />} />
        <Route path="/reception" element={<ReceptionPointsPage />} />
        <Route path="/initiative" element={<InitiativePage />} />
      <Route element={<PrivateRouter isAllowed={user.status === 'logged'} redirect='/' />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        {/* <Route path="/initiative/:id" element={<InitiativeComentsPage />} /> */}
      </Route>  
      </Route>
    </Routes>
  );
}
