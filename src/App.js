import './App.css';
import React, { useContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.js'
import Profile from "./pages/profile/Profile.js"
import Login from  "./pages/login/Login.js"
import Register from  "./pages/register/Register.js"
import { AuthContext } from "./context/AuthContext";
import {BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom'


function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user? <Home /> : <Register />}/>
        <Route path='/profile/:username' element={<Profile />}/>
        <Route path='/signin' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
