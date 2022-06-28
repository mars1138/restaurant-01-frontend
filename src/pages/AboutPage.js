// import React, { useState, useContext, useEffect } from 'react';
import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import Gallery from '../components/layout/Gallery';
import History from '../components/layout/History';
import FeaturedChef from '../components/about/FeaturedChef';

// import CartContext from '../components/store/cart-context';
import SetRevealSections from '../components/utilities/SetRevealSections';
import {useCart} from '../components/hooks/useCart';

const About = (props) => {
  // const [cartReloaded, setCartReloaded] = useState(false);
  // const cartCtx = useContext(CartContext);

  // const { addItem, items } = cartCtx;

  const { setCartReloaded, retrieveCart } = useCart();

  useEffect(()=> {
    retrieveCart();
  },[retrieveCart])

  // useEffect(() => {
  //   const savedItems = JSON.parse(localStorage.getItem('cart'));
  //   if (
  //     !cartReloaded &&
  //     items.length === 0 &&
  //     savedItems &&
  //     savedItems.length > 0
  //   ) {
  //     savedItems.forEach((item) => addItem(item));
  //   }
  // }, [addItem, cartReloaded, items.length]);

  useEffect(() => {
    setCartReloaded(true);
  }, [setCartReloaded]);

  useEffect(() => {
    SetRevealSections();
  }, []);

  return (
    <React.Fragment>
      <Section>
        <History />
      </Section>

      <Section sectionClass="bg-awhite">
        <FeaturedChef />
      </Section>

      <Section>
        <Gallery />
      </Section>
    </React.Fragment>
  );
};

export default About;
