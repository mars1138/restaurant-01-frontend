import React, { useEffect } from 'react';

import Section from '../components/layout/Section';
import MenuList from '../components/menu/MenuList';

const MenuPage = () => {
  useEffect(() => {
    console.log('MenuPage');
  }, []);

  return (
    <div>
      <Section>
        <h2>Our Dishes</h2>
        <p>
          Qui cumque voluptatum est quam dolores vel, sit accusamus id harum
          facilis eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
      </Section>

      <Section>
        <MenuList />
      </Section>
    </div>
  );
};

export default MenuPage;
