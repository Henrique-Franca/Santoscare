// App.js
import React from 'react';
import './App.css';
import LoginForm from './pages/Login/LoginForm'; // Importe o componente LoginForm
import HomePage from './pages/Home/home';
import Statistics from './pages/Statistics/statistics';
import Escalas from './pages/Escalas/escalas'
import Financeiros from './pages/Financeiros/financiero'
import MonitorOper from './pages/MonitorOper/monitoroper'
import Pacientes from './pages/Pacientes/pacientes'
import Proficionais from './pages/Proficionais/proficionais'
import Tratamento from './pages/Tratamento/tratamento'

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