import { NavLink } from 'react-router-dom';

import classes from './MainNav.module.css';

const MainNav = () => {
  return (
    <div className={classes.mainNav}>
      <ul className={classes.navList}>
        <li>
          <NavLink activeClassName={classes.active} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
