import './App.css';
import './styles/background.scss';
import Navbar from './components/navbar';
import Home from './views/home';
import Login from './views/login';
import Contact from './components/contact';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <div className='background'>
          <Navbar></Navbar>

          <div className='content'>
            <Home></Home>
          </div>
          <Contact></Contact>

          <div className='decoreX'></div>
          <div className='decoreY'></div>
          <div className='decoreZ'></div>
        </div>
      } />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
