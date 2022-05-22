import { useContext, useEffect, useState } from 'react';

import CartIcon from '../cart/CartIcon';
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const cartQty = items.reduce((cur, item) => {
    return cur + item.quantity;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {cartQty > 0 && (
        <div className={classes.badge}>
          <span className={classes.text}>{cartQty}</span>
        </div>
      )}
    </button>
  );
};

export default HeaderCartButton;
