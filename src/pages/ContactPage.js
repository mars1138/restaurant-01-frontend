import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import HeroImage from '../components/layout/HeroImage';
import Contact from '../components/contact/Contact';

const ContactPage = () => {
  useEffect(() => {
    console.log('Contact');
  }, []);

  return (
    <React.Fragment>
      <Section containerClass="container-image">
        <HeroImage />
      </Section>

      <Section>
        <Contact />
      </Section>
    </React.Fragment>
  );
};

export default ContactPage;
