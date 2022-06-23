import React from 'react';
// import { NavLink } from 'react-router-dom';

import classes from './MenuNav.module.css';

const MenuNav = (props) => {
  const clickHandler = (event) => {
    const menu = event.target.innerText;
    props.setMenu(menu);

    const listElements = event.target.parentElement.parentElement.children;

    [...listElements].forEach((el) => {
      console.log('el.children: ', el.children[0]);
      el.children[0].classList.remove('active');
    });

    console.log(event.target);

    event.target.classList.add('active');
    console.log(listElements);
  };

  return (
    <ul className={classes['menu-nav']}>
      <li onClick={clickHandler}>
        <span>All</span>
      </li>
      <li onClick={clickHandler}>
        <span>Salad</span>
      </li>
      <li onClick={clickHandler}>
        <span>Pasta</span>
      </li>
      <li onClick={clickHandler}>
        <span>Pizza</span>
      </li>
      <li onClick={clickHandler}>
        <span>Dessert</span>
      </li>
      {/* <li>
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
      </li> */}
    </ul>
  );
};

export default MenuNav;
