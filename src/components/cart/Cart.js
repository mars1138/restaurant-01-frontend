import React, { useState, useContext } from 'react';

import Modal from '../UI/Modal';
import InfoModal from '../UI/InfoModal';
import CartItem from './CartItem';
import CartContext from '../store/cart-context';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Cart.module.css';

const Cart = (props) => {
  const [location, setLocation] = useState('Downtown');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const itemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const itemAddHandler = (item) => {
    cartCtx.addItem(item, false, true);
  };

  const itemDeleteHandler = (id) => {
    cartCtx.deleteItem(id);
  };

  const clearErrorHandler = () => {
    setError(false);
  };

  const setLocationHandler = (event) => {
    setLocation(event.target.value);
  };

  const orderStripeHandler = async () => {
    setIsSubmitting(true);

    localStorage.setItem('cart', JSON.stringify(cartCtx.items));

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/orders/stripe-order`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: cartCtx.items,
            location: location,
          }),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      const resData = await response.json();

      props.onClose();
      setIsSubmitting(false);

      window.location = resData.url;
    } catch (err) {
      console.log(err);
      setIsSubmitting(false);
      setError(true);
    }
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onDelete={itemDeleteHandler.bind(null, item.id)}
          onRemove={itemRemoveHandler.bind(null, item.id)}
          onAdd={itemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const pickupLocation = (
    <div className={classes.location}>
      <label htmlFor="location">Choose a pickup location: &nbsp;</label>

      <select name="location" id="location" onChange={setLocationHandler}>
        <option value="Downtown">Downtown</option>
        <option value="Suburbia">Suburbia</option>
        <option value="Oldtown">Old Town</option>
      </select>
    </div>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className="btn-alt" onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className="btn" onClick={orderStripeHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      <h2 className={classes.title}>Your Cart</h2>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{+totalAmount < 0 ? '$ 0.00' : totalAmount}</span>
      </div>
      {pickupLocation}
      {modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = (
    <div className={classes.submitting}>
      <p>Sending order data...</p>

      <LoadingSpinner />
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {!error && !isSubmitting && cartModalContent}
      {!error && isSubmitting && isSubmittingModalContent}
      {error && <InfoModal error={error} onClear={clearErrorHandler} />}
    </Modal>
  );
};

export default Cart;
