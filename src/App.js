import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Configure } from './pages/Configure';


function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configure" element={<Configure />} />
      </Routes>
    </>
  );
}

export default App;