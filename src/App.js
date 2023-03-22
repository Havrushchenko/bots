import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Configure } from './pages/Configure';
import { Category } from './pages/Category';
import { Done } from './pages/Done';


function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configure" element={<Configure />} />
        <Route path="/category" element={<Category />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </>
  );
}

export default App;