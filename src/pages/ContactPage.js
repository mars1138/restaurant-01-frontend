import React, { useEffect } from 'react';

import ContactForm from '../components/contact/ContactForm';
import Section from '../components/layout/Section';
import HeroImage from '../components/layout/HeroImage';

const Contact = () => {
  useEffect(() => {
    console.log('Contact');
  }, []);

  return (
    <React.Fragment>
      <Section type="hero">
        <HeroImage />
        <div className="center heroHeader">
          <h1>The Very Best Italian Cuisine</h1>
        </div>
      </Section>

      <Section>
        <div class="container">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            fuga dolores nihil! Consequatur ratione corporis nobis deleniti
            tempora dolor ex sit. Voluptas mollitia ea ducimus explicabo
            repellendus incidunt possimus veritatis?
          </p>
          <ContactForm />
        </div>
      </Section>
    </React.Fragment>
  );
};

export default Contact;
