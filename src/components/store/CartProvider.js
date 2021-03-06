import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedTotalAmount;

    if (action.cartView) {
      updatedTotalAmount = state.totalAmount + action.item.price;
    } else {
      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;
    }

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity:
          existingItem.quantity + (action.cartView ? 1 : action.item.quantity),
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    if (!existingItem) {
      updatedItems = state.items.concat(action.item);
    }

    localStorage.setItem('cart', JSON.stringify(updatedItems));

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmt = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.quantity === 0) return;

    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    if (existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    console.log(updatedTotalAmt);

    localStorage.setItem('cart', JSON.stringify(updatedItems));

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmt,
    };
  }

  if (action.type === 'DELETE') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];

    const updatedTotalAmt =
      state.totalAmount - existingItem.price * existingItem.quantity;

    const updatedItems = state.items.filter((item) => item.id !== action.id);

    localStorage.setItem('cart', JSON.stringify(updatedItems));

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmt,
    };
  }

  if (action.type === 'CLEAR') {
    localStorage.removeItem('cart');

    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addHandler = (item, inCart = false, cartView = false) => {
    dispatchCartAction({
      type: 'ADD',
      item: item,
      inCart: inCart,
      cartView: cartView,
    });
  };

  const removeHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const deleteHandler = (id) => {
    dispatchCartAction({ type: 'DELETE', id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addHandler,
    removeItem: removeHandler,
    deleteItem: deleteHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
