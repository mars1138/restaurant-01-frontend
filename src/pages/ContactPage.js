import React, { useEffect, useContext, useState } from 'react';

import Section from '../components/layout/Section';
import Contact from '../components/contact/Contact';
import Gallery from '../components/layout/Gallery';

import CartContext from '../components/store/cart-context';

const ContactPage = () => {
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
      <Section sectionClass="bg-awhite" containerClass="flex-column">
        <div className="container-text flex-column">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            fuga dolores nihil! Consequatur ratione corporis nobis deleniti
            tempora dolor ex sit. Voluptas mollitia ea ducimus explicabo
            repellendus incidunt possimus veritatis?
          </p>
        </div>
        <Contact />
      </Section>

      <Section>
        <Gallery />
      </Section>
    </React.Fragment>
  );
};

export default ContactPage;
