import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MenuNav.module.css';

const MenuNav = () => {
  return (
    <ul className={classes['menu-nav']}>
      <li>
        <NavLink exact activeClassName={classes.active} to="/menu" id="link">
          All
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/menu/salads">
          Salads
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/menu/pasta">
          Pasta
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/menu/pizza">
          Pizza
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/menu/dessert">
          Dessert
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuNav;
