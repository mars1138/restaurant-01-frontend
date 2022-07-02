// import React from 'react';
import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import OrderOnline from '../components/menu/OrderOnline';
import MenuList from '../components/menu/MenuList';
import Gallery from '../components/layout/Gallery';

// import CartContext from '../components/store/cart-context';
import SetRevealSections from '../components/utilities/SetRevealSections';
import { useCart } from '../components/hooks/useCart';

const MenuPage = (props) => {
  const { setCartReloaded, retrieveCart } = useCart();

  useEffect(() => {
    retrieveCart();
  }, [retrieveCart]);

  useEffect(() => {
    setCartReloaded(true);
  }, [setCartReloaded]);

  useEffect(() => {
    SetRevealSections(0.03);
  }, []);

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
