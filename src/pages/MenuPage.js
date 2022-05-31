import React from 'react';

import Section from '../components/layout/Section';
import OrderOnline from '../components/menu/OrderOnline';
import MenuList from '../components/menu/MenuList';
import HeroImage from '../components/layout/HeroImage';
import Gallery from '../components/layout/Gallery';

const MenuPage = (props) => {
  return (
    <React.Fragment>
      <Section containerClass="container-image">
        <HeroImage />
      </Section>

      <Section>
        <OrderOnline />
      </Section>

      <Section sectionClass="bg-awhite" containerClass="flex-column">
        <MenuList menu={props.menu} />
      </Section>

      <Section>
        <Gallery />
      </Section>
    </React.Fragment>
  );
};

export default MenuPage;
