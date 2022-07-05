import React from 'react';
import { nav, list } from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={nav}>
      <ul className={list}>
        <li>Logo</li>
        <li>Search</li>
        <li>New Post</li>
        <li>
          <Link to="/dashboard">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
