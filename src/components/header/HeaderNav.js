import React, { useState, useEffect } from 'react';

import Logo from './Logo';
import MainNav from '../layout/MainNav';
import classes from './HeaderNav.module.css';
import Hero from '../layout/Hero';
import Backdrop from '../UI/Backdrop';
import HeaderNavButton from './HeaderNavButton';

const HeaderNav = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('stickyNav');
    const navHeight = nav.getBoundingClientRect().height;
    const target = nav.parentElement.childNodes[1];

    const stickyNav = function (entries) {
      const [entry] = entries;

      if (!entry.isIntersecting) nav.classList.add('sticky');
      else nav.classList.remove('sticky');
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0.1,
      rootMargin: `-${navHeight / 2}px`,
    });

    headerObserver.observe(target);
  }, []);

  const openDrawerHandler = () => {
    setDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerOpen(false);
  };

  const headerClasses = `${classes.header}`;

  return (
    <React.Fragment>
      <header className={headerClasses}>
        <div className={classes.headerControl} id="stickyNav">
          <Logo />
          <h2 className={classes.title}>Ristorante San Giorgio</h2>
          <HeaderNavButton openDrawer={openDrawerHandler} />
          <nav className={classes['header__main-nav']}>
            <MainNav onShowCart={props.onShowCart} />
          </nav>
        </div>
        <Hero />
        {drawerOpen && <Backdrop onClick={closeDrawerHandler} />}
        {drawerOpen && (
          <nav
            className={classes['header__side-nav']}
            onClick={closeDrawerHandler}
          >
            <MainNav onShowCart={props.onShowCart} />
          </nav>
        )}
      </header>
    </React.Fragment>
  );
};

export default HeaderNav;
