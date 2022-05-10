import { useEffect } from 'react';
import ImageGallery from '../components/layout/ImageGallery';

import Section from '../components/layout/Section';
import Slideshow from '../components/layout/Slideshow';

const HomePage = () => {
  useEffect(() => {
    console.log('Home');
  }, []);

  return (
    <div>
      <Section type="description">
        <ImageGallery>
          <img alt="history1" />
          <img alt="history2" />
          <img alt="history3" />
        </ImageGallery>
        <h3>Our History</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
        <button>Read More</button>
      </Section>
      <Section type="description">
        <h3>Featured Dishes</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
      </Section>
      <Section type="locations">
        <h3>Locations</h3>
        <Slideshow />
      </Section>
    </div>
  );
};

export default HomePage;
