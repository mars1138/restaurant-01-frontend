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
          <NavLink to="/menu/menuSalads">Salads</NavLink>
        </li>
        <li>
          <NavLink to="/menu/menuPasta">Pasta</NavLink>
        </li>
        <li>
          <NavLink to="/menu/menuPizza">Pizza</NavLink>
        </li>
      </ul>

      <Route path="/menu/menuSalads">
        <MenuSalads />
      </Route>
      <Route path="/menu/menuPasta" exact>
        <MenuPasta />
      </Route>
      <Route path="/menu/menuPizza" exact>
        <MenuPizza />
      </Route>
      <Route path="/menu/menuDessert" exact>
        <MenuDessert />
      </Route>
    </Section>
  );
};

export default MenuList;
