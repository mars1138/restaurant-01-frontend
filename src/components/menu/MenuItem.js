import React from 'react';

import MenuItemForm from './MenuItemForm';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  // console.log('imgUrl: ', props.imgUrl);

  return (
    <li className={classes['list-item']}>
      <img src={props.url} alt={props.url} />
      <div className={classes.text}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.form}>
        <span>${props.price}</span>
        <MenuItemForm />
      </div>
    </li>
  );
};

export default MenuItem;
