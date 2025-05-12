import React from 'react';
import Navbar from './Fixed_Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Fixed_Components/Footer';
import ScrollTop from './hooks/scrollTop';

function MainLayout() {
  return (
  <>
  <ScrollTop />
    <Navbar />
  
  <Outlet />
  
  <Footer />
    </>
  
  );
}

export default MainLayout;