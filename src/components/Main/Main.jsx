import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../routes/Home';
import About from '../../routes/About';
import Dashboard from '../../routes/Dashboard';
import NothingThere from '../../routes/NothingThere';
import { main } from './Main.module.css';

const Main = () => {
  return (
    <main className={main}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NothingThere />} />
      </Routes>
    </main>
  );
};

export default Main;
