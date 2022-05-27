import React from 'react';

import MenuItem from './MenuItem';

import classes from './MenuFiltered.module.css';

const MenuFiltered = props => {
  console.log('dishes: ', props.dishes);

  const list = props.dishes.map(dish => {
    return (
      <MenuItem
        key={dish.id}
        id={dish.id}
        name={dish.name}
        description={dish.description}
        price={dish.price}
        url={dish.imgUrl}
      />
    );
  });
  console.log('list: ', list);

  return (
    <div className={classes['menu-control']}>
      <h3 className={classes.heading}>{props.type}</h3>
      <ul>{list}</ul>
    </div>
  );
};

export default MenuFiltered;
