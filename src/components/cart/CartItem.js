import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const subtotal = `$${(props.quantity * props.price).toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      {/* <div> */}
      <h3>{props.name}</h3>
      <div className={classes.summary}>
        <span className={classes.price}>{price}</span>
        <span className={classes.quantity}>x {props.quantity}</span>
        <button className={classes.delete} onClick={props.onDelete}>
          <ion-icon
            className={classes.ion}
            size="medium"
            src="/trash-outline.svg"
          ></ion-icon>
        </button>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
      <div className={classes.subtotal}>{subtotal}</div>
      {/* </div> */}
    </li>
  );
};

export default CartItem;
