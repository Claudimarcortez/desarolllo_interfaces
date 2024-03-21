import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Personaje from './components/Personaje';
import Info from './components/Info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Personaje />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
