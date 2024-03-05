// App.js
import React from 'react';
import './App.css';
import LoginForm from './pages/Login/LoginForm'; // Importe o componente LoginForm
import HomePage from './pages/Home/home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;