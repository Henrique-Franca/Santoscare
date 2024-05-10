// App.js
import React from 'react';
import './App.css';
import LoginForm from './pages/Login/LoginForm'; // Importe o componente LoginForm
import HomePage from './pages/Home/home';
import Statistics from './pages/statistics';
import Escalas from './pages/escalas'
import Financeiros from './pages/financiero'
import MonitorOper from './pages/monitoroper'
import Pacientes from './pages/pacientes'
import Proficionais from './pages/proficionais'
import Tratamento from './pages/tratamento'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/escalas' element={<Escalas />} />
          <Route path='/financeiros' element={<Financeiros />} />
          <Route path='/monitoroper' element={<MonitorOper />} />
          <Route path='/pacientes' element={<Pacientes />} />
          <Route path='/proficionais' element={<Proficionais />} />
          <Route path='/tratamento' element={<Tratamento />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;