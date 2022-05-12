import { useEffect } from 'react';

import Section from '../components/layout/Section';
import HeroImage from '../components/layout/HeroImage';
import ImageGallery from '../components/layout/ImageGallery';

const About = () => {
  useEffect(() => {
    console.log('About');
  }, []);

  return (
    <div>
      <Section type="hero">
        <HeroImage />
        <div className="heroHeader">
          <h1>The Very Best Italian Cuisine</h1>
        </div>
      </Section>

      <Section>
        <div className="container">
          <h2>Our History</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit.
          </p>
        </div>
      </Section>

      <Section type="featured">
        <div className="container">
          <h2>Chef Lorenzo</h2>
          <img alt="chef portrait" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container">
          <ImageGallery>
            <img alt="gallery item 1" />
            <img alt="gallery item 2" />
            <img alt="gallery item 3" />
            <img alt="gallery item 4" />
            <img alt="gallery item 5" />
          </ImageGallery>
        </div>
      </Section>
    </div>
  );
};

export default About;
