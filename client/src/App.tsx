import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/UI/NavBar';
import PrivateCabinetPage from './components/Pages/PrivateCabinetPage';


function App(): JSX.Element {
  return (
      <>
        <NavBar />
<Routes>
    <Route path='/lk' element={<PrivateCabinetPage />}/>
</Routes>
        </>

  );
}

export default App;
