import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Dashboard, SignupForm } from './components';
import withAuth from './HOC/withAuth'

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={withAuth(Dashboard)} />
      <Route path="/signup" element={<SignupForm />} /> 
    </Routes>
    </BrowserRouter>
  );
};

export default App;
