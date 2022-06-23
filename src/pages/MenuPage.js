// import React from 'react';
import React, { useEffect, useContext, useState } from 'react';

import Section from '../components/layout/Section';
import OrderOnline from '../components/menu/OrderOnline';
import MenuList from '../components/menu/MenuList';
import Gallery from '../components/layout/Gallery';

import CartContext from '../components/store/cart-context';

const MenuPage = (props) => {
  const [cartReloaded, setCartReloaded] = useState(false);
  const cartCtx = useContext(CartContext);

  const { addItem, items } = cartCtx;

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('cart'));
    if (
      !cartReloaded &&
      items.length === 0 &&
      savedItems &&
      savedItems.length > 0
    ) {
      savedItems.forEach((item) => addItem(item));
    }
  }, [addItem, cartReloaded, items.length]);

  useEffect(() => {
    setCartReloaded(true);
  }, [setCartReloaded]);

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
