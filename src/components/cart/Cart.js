import React, { useState, useContext } from 'react';

import Modal from '../UI/Modal';
import InfoModal from '../UI/InfoModal';
import CartItem from './CartItem';
import CartContext from '../store/cart-context';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Cart.module.css';

const Cart = (props) => {
  const [location, setLocation] = useState('Downtown');
  const [pickupTime, setPickupTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const [errorData, setErrorData] = useState();
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

  const setPickupTimeHandler = (event) => {
    setPickupTime(event.target.value);
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
            pickupTime: pickupTime,
          }),
        }
      );

      if (!response.ok) {
        const resError = await response.json();
        console.log(resError);
        setErrorData(resError.message);
        throw new Error(resError.message);
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

  const cartIsEmpty = (
    <div className={classes.empty}>
      {cartCtx.items.length === 0 && (
        <div>
          <p>Cart is Empty</p>
        </div>
      )}
    </div>
  );

  const pickupLocation = (
    <div className={classes.options}>
      <label htmlFor="location">Choose a pickup location: &nbsp;</label>

      <select
        name="location"
        id="location"
        required
        onChange={setLocationHandler}
      >
        <option value=""></option>
        <option value="Downtown">Downtown</option>
        <option value="Suburbia">Suburbia</option>
        <option value="Oldtown">Old Town</option>
      </select>
    </div>
  );

  const getPickupTimes = () => {
    const currentTime = new Date();
    const timeArray = [];

    let currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    const computeTime = (hour, minute) => {
      return `${hour > 12 ? hour - 12 : hour}:${minute === 0 ? '00' : minute} ${
        hour > 11 ? 'PM' : 'AM'
      }`;
    };

    timeArray.push('');
    if (30 - currentMinutes > 20) timeArray.push(computeTime(currentHour, 30));
    if (45 - currentMinutes > 20) timeArray.push(computeTime(currentHour, 45));

    currentHour++;

    for (let i = currentHour; i <= 22; i++) {
      timeArray.push(computeTime(i, 0));
      timeArray.push(computeTime(i, 15));
      timeArray.push(computeTime(i, 30));
      timeArray.push(computeTime(i, 45));
    }
    return timeArray;
  };

  const pickupTimeOptions = (
    <div className={classes.options}>
      <label htmlFor="pickupTime">Choose a pickup time: &nbsp;</label>
      <select name="pickupTime" id="pickupTime" onChange={setPickupTimeHandler}>
        {getPickupTimes().map((time) => (
          <option key={`${time}`} value={`${time}`}>{`${time}`}</option>
        ))}
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
      {cartCtx.items.length > 0 && cartItems}
      {cartCtx.items.length === 0 && cartIsEmpty}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{+totalAmount < 0 ? '$ 0.00' : totalAmount}</span>
      </div>
      {hasItems && pickupLocation}
      {hasItems && pickupTimeOptions}
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
      {error && <InfoModal error={errorData} onClear={clearErrorHandler} />}
    </Modal>
  );
};

export default Cart;
