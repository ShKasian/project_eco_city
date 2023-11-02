import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './UI/NavBar';
import Footer from './UI/Footer';

export default function Layout(): JSX.Element {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
