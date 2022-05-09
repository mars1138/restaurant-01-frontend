import { NavLink } from 'react-router-dom';

import classes from './MainNav.module.css';

const MainNav = () => {
  return (
    <header>
      <div>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Home
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
    </header>
  );
};

export default MainNav;
