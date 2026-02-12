import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Register from './pages/Register';
import ControleInvest from './pages/ControleInvest'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import ControleGastos from './pages/ControleGastos';
import DashboardInvest from './pages/DashboardInvest'

import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/controleInvest" element={<ControleInvest/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/controleGastos" element={<ControleGastos/>} />
      <Route path="/dashboard-invest" element={<DashboardInvest/>} />
   </Routes>
   
   </BrowserRouter>
     
  )
}

export default App
