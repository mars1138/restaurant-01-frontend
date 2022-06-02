import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import Contact from '../components/contact/Contact';
import Gallery from '../components/layout/Gallery';

const ContactPage = () => {
  useEffect(() => {
    console.log('Contact');
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
