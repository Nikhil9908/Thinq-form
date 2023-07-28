import React from 'react'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/SignUp';
import Services from './components/Services';
import Career from './components/Career';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/home' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/login' element = {<Login/>} />
      <Route path='/signup' element = {<Signup/>} />
      <Route path='/services' element = {<Services/>} />
      <Route path='/career' element = {<Career/>} />
      </Routes>
         
       
    </BrowserRouter>
  );
}

export default App;
