import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

import classes from './MenuNav.module.css';

const MenuNav = (props) => {
  const [active, setActive] = useState(0);

  return (
    <ul className={classes['menu-nav']}>
      {props.menuLinks.map((link, i) => {
        return (
          <li key={i}>
            <span
              className={`${active === i ? `${classes.active}` : ''}`}
              onClick={(e) => {
                setActive(active === i ? active : i);
                props.setMenu(link.title);
              }}
            >
              {link.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuNav;
