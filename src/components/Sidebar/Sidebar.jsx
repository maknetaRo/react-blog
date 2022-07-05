import React from 'react';
import { Link } from 'react-router-dom';
import { aside } from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={aside}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
    </aside>
  );
};

export default Sidebar;
