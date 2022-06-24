import React, { useState, useContext, useEffect } from 'react';

import Section from '../components/layout/Section';
import Gallery from '../components/layout/Gallery';
import History from '../components/layout/History';
import FeaturedChef from '../components/about/FeaturedChef';

import CartContext from '../components/store/cart-context';

const About = (props) => {
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
