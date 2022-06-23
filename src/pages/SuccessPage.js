import React from 'react';

import Section from '../components/layout/Section';
import Gallery from '../components/layout/Gallery';
import Success from '../components/layout/Success';

const SuccessPage = () => {
  localStorage.removeItem('cart');

  return (
    <React.Fragment>
      <Section>
        <Success />
      </Section>

      <Section>
        <Gallery />
      </Section>
    </React.Fragment>
  );
};

export default SuccessPage;
