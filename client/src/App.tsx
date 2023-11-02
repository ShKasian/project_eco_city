import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ReceptionPointsPage from './components/Pages/ReceptionPointsPage';
import MainPage from './components/Pages/MainPage';
import Layout from './components/Layout';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/reception" element={<ReceptionPointsPage />} />
      </Route>
    </Routes>
  );
}

