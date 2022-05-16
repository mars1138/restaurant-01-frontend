import React from 'react';

import Section from '../components/layout/Section';
import HeroImage from '../components/layout/HeroImage';
import Slideshow from '../components/layout/Slideshow';
import History from '../components/layout/History';
import FeaturedChef from '../components/about/FeaturedChef';

const About = () => {
  return (
    <React.Fragment>
      <Section containerClass="container-image">
        <HeroImage />
      </Section>

      <Section>
        <History />
      </Section>

      <Section sectionClass="bg-awhite">
        <FeaturedChef />
      </Section>

      <Section>
        <Slideshow />
      </Section>
    </React.Fragment>
  );
};

export default About;
