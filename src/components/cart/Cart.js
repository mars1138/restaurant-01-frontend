import React, { useState, useContext } from 'react';

import Modal from '../UI/Modal';
import InfoModal from '../UI/InfoModal';
import CartItem from './CartItem';
// import Checkout from './Checkout';
import CartContext from '../store/cart-context';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Cart.module.css';

const Cart = (props) => {
  // const [isCheckout, setIsCheckout] = useState(false);
  const [location, setLocation] = useState('Downtown');
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [didSubmit, setDidSubmit] = useState(false);
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

  // const orderHandler = () => {
  //   setIsCheckout(true);
  // };

  const clearErrorHandler = () => {
    setError(false);
  };

  const setLocationHandler = (event) => {
    setLocation(event.target.value);
  };

  // let orderData;

  const orderStripeHandler = async () => {
    console.log('Location:', location);
    console.log('order sent to stripe');
    setIsSubmitting(true);
    // setDidSubmit(false);
    // setIsCheckout(false);

    localStorage.setItem('items', JSON.stringify(cartCtx.items));

    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/api/orders/stripe-order`,
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

      console.log('resdata: ', resData);
      props.onClose();
      setIsSubmitting(false);
      window.location = resData.url;
    } catch (err) {
      console.log(err);
      setIsSubmitting(false);
      setError(true);
    }
  };

  // const submitOrderHandler = async (orderData) => {
  //   try {
  //     setIsSubmitting(true);
  //     const response = await fetch('http://localhost:5000/api/orders', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name: orderData.name,
  //         email: orderData.email,
  //         phone: orderData.phone,
  //         street: orderData.street,
  //         city: orderData.city,
  //         zipCode: orderData.zipCode,
  //         creditCard: orderData.creditCard,
  //         items: cartCtx.items,
  //       }),
  //     });

  //     const responseData = await response.json();

  //     if (!response.ok) throw new Error(responseData.message);

  //     console.log('response data: ', responseData);
  //     orderData = responseData;

  //     setIsSubmitting(false);
  //     setDidSubmit(true);
  //     // cartCtx.clearCart();
  //   } catch (err) {
  //     console.log(err);
  //     setIsSubmitting(false);
  //     setError(err.message || 'An unknown error occurred, please try again');
  //   }
  // };

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
      {/* {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )} */}
      {/* {!isCheckout && modalActions} */}
    </React.Fragment>
  );

  const isSubmittingModalContent = (
    <div className={classes.submitting}>
      <p>Sending order data...</p>

      <LoadingSpinner />
    </div>
  );

  // const didSubmitModalContent = (
  //   <React.Fragment>
  //     <p>Successfully sent the order!</p>
  //     {orderData}
  //     <div className={classes.actions}>
  //       <button className="btn" onClick={props.onClose}>
  //         Close
  //       </button>
  //     </div>
  //   </React.Fragment>
  // );

  return (
    <Modal onClose={props.onClose}>
      {!error && !isSubmitting && cartModalContent}
      {!error && isSubmitting && isSubmittingModalContent}
      {/* {!error && !isSubmitting && didSubmit && didSubmitModalContent} */}
      {error && <InfoModal error={error} onClear={clearErrorHandler} />}
    </Modal>
  );
};

export default Cart;
