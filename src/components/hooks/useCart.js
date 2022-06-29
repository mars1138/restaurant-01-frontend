import { useState, useContext } from 'react';
import CartContext from '../store/cart-context';

export const useCart = () => {
  const [cartReloaded, setCartReloaded] = useState(false);
  const cartCtx = useContext(CartContext);

  const { addItem, items } = cartCtx;
  let savedItems;

  const retrieveCart = () => {
    savedItems = JSON.parse(localStorage.getItem('cart'));
    if (
      !cartReloaded &&
      items.length === 0 &&
      savedItems &&
      savedItems.length > 0
    ) {
      savedItems.forEach((item) => addItem(item));
    }
  };

  return { setCartReloaded, retrieveCart };
};
