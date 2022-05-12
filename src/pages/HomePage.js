import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroVideo from '../components/layout/HeroVideo';
import ImageGallery from '../components/layout/ImageGallery';

import Section from '../components/layout/Section';
import Slideshow from '../components/layout/Slideshow';

const HomePage = () => {
  useEffect(() => {
    console.log('Home');
  }, []);

  return (
    <div>
      <Section type="hero">
        <HeroVideo />
        <div className="center heroHeader">
          <h1>The Very Best Italian Cuisine</h1>
        </div>
      </Section>

      <Section type="description">
        <div className="container">
          <ImageGallery>
            <img alt="history1" />
            <img alt="history2" />
            <img alt="history3" />
          </ImageGallery>
          <h2>Our History</h2>
          <video autoPlay muted loop>
            <source
              src="../../public/istockphoto-1211158980-640_adpp_is.mp4"
              type="video/mp4"
            />
          </video>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit.
          </p>
          <Link to="/about">Read More</Link>
        </div>
      </Section>
      <Section type="featured">
        <div className="container">
          <h2>Featured Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit.
          </p>
        </div>
      </Section>
      <Section type="locations">
        <div className="container">
          <h2>Locations</h2>
          <Slideshow />
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
