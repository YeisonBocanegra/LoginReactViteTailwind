import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Formulario from './Formulario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;