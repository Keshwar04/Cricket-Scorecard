import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import PostLogin from './pages/postlogin';
import PreLogin from './pages/prelogin';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

const App = () => {

  const isUserLoggedIn = localStorage.getItem('islogin')

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isUserLoggedIn ? <Navigate to='/home'/> : <PreLogin />} />
        <Route path='/home' element={<PostLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App