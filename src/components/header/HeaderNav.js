import React from 'react';

import Logo from './Logo';
import MainNav from '../layout/MainNav';
import classes from './HeaderNav.module.css';
import HeroVideo from '../layout/HeroVideo';

const HeaderNav = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <h2>A la Italia</h2>
      <MainNav />
      <HeroVideo />
    </header>
  );
};

export default HeaderNav;
