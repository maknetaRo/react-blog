import React, { Fragment } from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import style from './styles/App.module.css';

const App = () => {
  console.log(style);
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <div className={style.container}>
          <Sidebar />
          <Main />
          <Outlet />
        </div>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
