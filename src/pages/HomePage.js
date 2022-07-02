import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import History from '../components/layout/History';
import FeaturedDishes from '../components/home/FeaturedDishes';
import Locations from '../components/home/Locations';

import SetRevealSections from '../components/utilities/SetRevealSections';
import { useCart } from '../components/hooks/useCart';

const HomePage = (props) => {
  const { setCartReloaded, retrieveCart } = useCart();

  useEffect(() => {
    retrieveCart();
  }, [retrieveCart]);

  useEffect(() => {
    setCartReloaded(true);
  }, [setCartReloaded]);

  useEffect(() => {
    SetRevealSections(0.2);
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
