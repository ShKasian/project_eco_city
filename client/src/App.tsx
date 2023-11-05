import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReceptionPointsPage from './components/Pages/ReceptionPointsPage';
import MainPage from './components/Pages/MainPage';
import Layout from './components/Layout';
import SignUpPage from './components/Pages/SignUpPage';
import SignInPage from './components/Pages/SignInPage';
import NewsPage from './components/Pages/NewsPage';
import InitiativePage from './components/Pages/InitiativePage ';
import PrivateCabinetPage from './components/Pages/PrivateCabinetPage';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/initiative" element={<InitiativePage />} />
        <Route path="/reception" element={<ReceptionPointsPage />} />
        <Route path="/lk" element={<PrivateCabinetPage />} />

      </Route>
    </Routes>
  );
}
