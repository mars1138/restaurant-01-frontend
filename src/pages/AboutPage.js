import React from 'react';

import Section from '../components/layout/Section';
import Gallery from '../components/layout/Gallery';
import History from '../components/layout/History';
import FeaturedChef from '../components/about/FeaturedChef';

const About = (props) => {
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
