import React from 'react';

import Logo from './Logo';
import MainNav from '../layout/MainNav';
import classes from './HeaderNav.module.css';

const HeaderNav = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <h2>A la Italia</h2>
      <MainNav />
    </header>
  );
};

export default HeaderNav;
