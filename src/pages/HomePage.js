import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import HeroVideo from '../components/layout/HeroVideo';
import History from '../components/layout/History';
import FeaturedDishes from '../components/home/FeaturedDishes';
import Locations from '../components/home/Locations';

const HomePage = () => {
  useEffect(() => {
    console.log('Home');
  }, []);

  return (
    <React.Fragment>
      <Section containerClass="container-video">
        <HeroVideo />
      </Section>

      <Section>
        <History />
      </Section>

      <Section sectionClass="bg-awhite" containerClass="flex-column">
        <FeaturedDishes />
      </Section>

      <Section>
        <Locations />
      </Section>
    </React.Fragment>
  );
};

export default HomePage;
