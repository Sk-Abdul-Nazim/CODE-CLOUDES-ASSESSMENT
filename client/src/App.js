import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminSetCity from './components/AdminSetCity.js';
import Users from './components/Users.js';
import Login from './components/Login';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
     <Route path="/admin" element={<AdminSetCity />} /> 
      <Route path="/user" element={<Users />} />
    </Routes>
          </BrowserRouter>
          </div>
  );
}

export default App;
