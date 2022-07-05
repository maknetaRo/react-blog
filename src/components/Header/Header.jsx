import React from 'react';
import Navbar from '../Navbar/Navbar';
import { header, title } from './Header.module.css';

const Header = () => {
  return (
    <header className={header}>
      <Navbar />
      <h1 className={title}>Blog</h1>
    </header>
  );
};

export default Header;
