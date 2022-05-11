import { useEffect } from 'react';

import Section from '../components/layout/Section';
import ImageGallery from '../components/layout/ImageGallery';

const About = () => {
  useEffect(() => {
    console.log('About');
  }, []);

  return (
    <div>
      <Section>
        <h2>Our History</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
      </Section>

      <Section>
        <h2>Chef Lorenzo</h2>
        <img alt="chef portrait" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
      </Section>

      <Section>
        <ImageGallery>
          <img alt="gallery item 1" />
          <img alt="gallery item 2" />
          <img alt="gallery item 3" />
          <img alt="gallery item 4" />
          <img alt="gallery item 5" />
        </ImageGallery>
      </Section>
    </div>
  );
};

export default About;
