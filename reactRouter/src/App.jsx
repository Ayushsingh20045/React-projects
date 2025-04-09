import React from 'react'
import { Outlet } from "react-router-dom";
import  Home from './components/Home/Home';
import  Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
   <Header/>
  <Outlet/>
   <Footer/>
    </>
  )
}

export default App
