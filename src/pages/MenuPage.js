import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import MenuList from '../components/menu/MenuList';
import HeroImage from '../components/layout/HeroImage';

const MenuPage = () => {
  useEffect(() => {
    console.log('MenuPage');
  }, []);

  return (
    <React.Fragment>
      <Section type="hero">
        <HeroImage />
        <div className="center heroHeader">
          <h1>Deliciosso!</h1>
        </div>
      </Section>

      <Section type="description">
        <div className="container">
          <h2>Our Dishes</h2>
          <p>
            Qui cumque voluptatum est quam dolores vel, sit accusamus id harum
            facilis eveniet nulla quis asperiores eius minus inventore,
            doloribus necessitatibus fugit.
          </p>
        </div>
      </Section>

      <Section type="featured">
        <div className="container">
          <h2>Order Online</h2>
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
        <div class="container">
          <MenuList />
        </div>
      </Section>
    </React.Fragment>
  );
};

export default MenuPage;
