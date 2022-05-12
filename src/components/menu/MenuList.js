import React, { useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Section from '../layout/Section';
import MenuSalads from './MenuSalads';
import MenuPasta from './MenuPasta';
import MenuPizza from './MenuPizza';
import MenuDessert from './MenuDessert';

const MenuList = () => {
  useEffect(() => {
    console.log('MenuList');
  }, []);

  return (
    <Section>
      <ul>
        <li>
          <NavLink to="/menu/salads">Salads</NavLink>
        </li>
        <li>
          <NavLink to="/menu/pasta">Pasta</NavLink>
        </li>
        <li>
          <NavLink to="/menu/pizza">Pizza</NavLink>
        </li>
        <li>
          <NavLink to="/menu/dessert">Dessert</NavLink>
        </li>
      </ul>

      <Route path="/menu/salads">
        <MenuSalads />
      </Route>
      <Route path="/menu/pasta" exact>
        <MenuPasta />
      </Route>
      <Route path="/menu/pizza" exact>
        <MenuPizza />
      </Route>
      <Route path="/menu/dessert" exact>
        <MenuDessert />
      </Route>
    </Section>
  );
};

export default MenuList;
