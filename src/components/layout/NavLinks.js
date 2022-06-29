import { NavLink } from 'react-router-dom';

import HeaderCartButton from '../header/HeaderCartButton';

const NavLinks = (props) => {
  return (
    <nav className={classes.mainNav}>
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
        <li>
          <HeaderCartButton onShowCart={props.onShowCart} />
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
