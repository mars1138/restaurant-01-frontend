// import React from 'react';
import React, { useEffect, useContext } from 'react';

import Section from '../components/layout/Section';
import OrderOnline from '../components/menu/OrderOnline';
import MenuList from '../components/menu/MenuList';
import Gallery from '../components/layout/Gallery';

import CartContext from '../components/store/cart-context';

const MenuPage = (props) => {
  const cartCtx = useContext(CartContext);

  const { addItem } = cartCtx;

  // const restoreItem =
  // useCallback(
  //   (item) => {
  //     addItem(item);
  //   }, []
  // )

  // const { addItem } = cartCtx;

  // const getSavedItems = useCallback(() => {
  //   const savedItems = JSON.parse(localStorage.getItem('items'));

  //   savedItems.forEach((item) => {
  //     console.log('get saved item...');
  //     return cartCtx.addItem(item);
  //   });
  // }, [cartCtx]);

  // useEffect(getSavedItems(), []);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'));

    if (savedItems) {
      savedItems.forEach((item) => addItem(item));
      localStorage.removeItem('items');
    }
  }, [addItem]);

  return (
    <React.Fragment>
      <Section>
        <OrderOnline />
      </Section>

      <Section sectionClass="bg-awhite" containerClass="flex-column">
        <MenuList menu={props.menu} />
      </Section>

      <Section>
        <Gallery />
      </Section>
    </React.Fragment>
  );
};

export default MenuPage;
