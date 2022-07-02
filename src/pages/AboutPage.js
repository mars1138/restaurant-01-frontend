import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import Gallery from '../components/layout/Gallery';
import History from '../components/layout/History';
import FeaturedChef from '../components/about/FeaturedChef';

import SetRevealSections from '../components/utilities/SetRevealSections';
import { useCart } from '../components/hooks/useCart';
import Receptions from '../components/about/Receptions';

const About = (props) => {
  const { setCartReloaded, retrieveCart } = useCart();

  useEffect(() => {
    retrieveCart();
  }, [retrieveCart]);

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
        <Receptions />
      </Section>

      <Section sectionClass="bg-awhite">
        <Gallery />
      </Section>
    </React.Fragment>
  );
};

export default About;
