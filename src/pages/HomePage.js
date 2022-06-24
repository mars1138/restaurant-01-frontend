import React, { useEffect, useContext, useState } from 'react';

import Section from '../components/layout/Section';
import History from '../components/layout/History';
import FeaturedDishes from '../components/home/FeaturedDishes';
import Locations from '../components/home/Locations';

import CartContext from '../components/store/cart-context';

const HomePage = props => {
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
      savedItems.forEach(item => addItem(item));
    }
  }, [addItem, cartReloaded, items.length]);

  useEffect(() => {
    setCartReloaded(true);
  }, [setCartReloaded]);

  useEffect(() => {
    const allSections = [...document.getElementsByTagName('section')];
    console.log(allSections);

    const revealSection = (entries, observer) => {
      const [entry] = entries;
      console.log(entry);
      if (!entry.isIntersecting) return;

      entry.target.classList.remove('hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(section => {
      console.log(section);
      sectionObserver.observe(section);
      section.classList.add('hidden');
    });
  }, []);

  return (
    <React.Fragment>
      <Section>
        <History />
      </Section>

      <Section sectionClass="bg-awhite" containerClass="flex-column">
        <FeaturedDishes featured={props.featured} />
      </Section>

      <Section>
        <Locations />
      </Section>
    </React.Fragment>
  );
};

export default HomePage;
