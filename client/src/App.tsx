import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './components/Pages/SignUpPage';
import SignInPage from './components/Pages/SignInPage';

export default function App(): JSX.Element {

  return (
    <div>
  <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
  </Routes>
  </div>
  )
}

