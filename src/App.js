import './App.css';
import React, { useContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.js'
import Profile from "./pages/profile/Profile.js"
import Login from  "./pages/login/Login.js"
import Register from  "./pages/register/Register.js"
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile:username' element={<Profile />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
