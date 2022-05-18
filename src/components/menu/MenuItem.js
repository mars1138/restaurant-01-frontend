import React from 'react';

import Card from '../UI/Card';
import MenuItemForm from './MenuItemForm';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  // console.log('imgUrl: ', props.imgUrl);

  return (
    <li className={classes['list-item']}>
      <Card>
        <img src={props.url} alt={props.url} />
        <div className={classes.text}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.form}>
          <span>${props.price}</span>
          <MenuItemForm />
        </div>
      </Card>
    </li>
  );
};

export default MenuItem;
