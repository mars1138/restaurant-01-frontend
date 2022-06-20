import React, { useEffect, useContext, useCallback } from 'react';

import Section from '../components/layout/Section';
import OrderOnline from '../components/menu/OrderOnline';
import MenuList from '../components/menu/MenuList';
import Gallery from '../components/layout/Gallery';

import CartContext from '../components/store/cart-context';

const MenuPage = (props) => {
  const cartCtx = useContext(CartContext);

  // useEffect(
  //   useCallback(() => {
  //     // const {addItem} = cartCtx;

  //     const savedItems = JSON.parse(localStorage.getItem('items'));

  //     savedItems.forEach((item) => cartCtx.addItem(item));
  //   }),
  //   []
  // );

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
