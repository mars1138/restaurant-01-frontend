import React, { useContext } from 'react';

import CartContext from '../store/cart-context';
import Card from '../UI/Card';
import MenuItemForm from './MenuItemForm';
import classes from './MenuItem.module.css';

const MenuItem = props => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = quantity => {
    console.log('qty: ', quantity);
    console.log('props.id: ', props.id);
    console.log('props.name: ', props.name);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    });
  };

  return (
    <li className={classes['list-item']}>
      <Card>
        <img
          src={`http://localhost:3000/img/menu/${props.url}`}
          alt={props.url}
        />
        <div className={classes.text}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.form}>
          <span>${props.price}</span>
          <MenuItemForm onAddToCart={addToCartHandler} />
        </div>
      </Card>
    </li>
  );
};

export default MenuItem;
