import React from 'react';
import Navbar from './Fixed_Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Fixed_Components/Footer';

function MainLayout() {
  return (
  <>
    <Navbar />
  <Outlet />
  <Footer />
    </>
  
  );
}

export default MainLayout;