import React from 'react';

import Logo from './Logo';
import MainNav from '../layout/MainNav';
import classes from './HeaderNav.module.css';

const HeaderNav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerControl}>
        <Logo />
        <h2 className="title">Ristorante San Giorgio</h2>
        <MainNav />
      </div>
    </header>
  );
};

export default HeaderNav;
