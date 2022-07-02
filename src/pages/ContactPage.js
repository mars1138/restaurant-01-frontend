import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import Contact from '../components/contact/Contact';
import Gallery from '../components/layout/Gallery';

import SetRevealSections from '../components/utilities/SetRevealSections';
import { useCart } from '../components/hooks/useCart';

const ContactPage = () => {
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
      <Section sectionClass="bg-awhite" containerClass="flex-column">
        <div className="container-text flex-column">
          <h2>Contact Us</h2>
          <p>
            We're ready to answer any questions you may have about our
            restaurant. Our main office is located in downtown just down the
            street from our restaurant. If you are inquiring about wedding
            parties, and other celebratory gatherings please indicate in the
            comments section of the form below. Openings are limited, so please
            allow for extra time to plan.
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
