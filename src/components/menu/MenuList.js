import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import MenuNav from './MenuNav';
// import MenuSalads from './MenuSalads';
import MenuFiltered from './MenuFiltered';
// import MenuPizza from './MenuPizza';
// import MenuDessert from './MenuDessert';

import Menu from '../test/testMenu';

const menu = Menu;

const pastas = menu.filter(dish => dish.type === 'pasta');
const pizzas = menu.filter(dish => dish.type === 'pizza');
const salads = menu.filter(dish => dish.type === 'salad');
const desserts = menu.filter(dish => dish.type === 'dessert');

const MenuList = () => {
  useEffect(() => {
    console.log(pastas);
  }, []);

  return (
    <React.Fragment>
      <div className="container-text flex-column">
        <h2>Menu</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
      </div>

      <MenuNav />

      <Route path="/menu/pasta" exact>
        <MenuFiltered dishes={pastas} type="Pasta" />
      </Route>
      <Route path="/menu/pizza" exact>
        <MenuFiltered dishes={pizzas} type="Pizza" />
      </Route>
      <Route path="/menu/dessert" exact>
        <MenuFiltered dishes={desserts} type="Dessert" />
      </Route>
      <Route path="/menu/salads">
        <MenuFiltered dishes={salads} type="Salad" />
      </Route>
    </React.Fragment>
  );
};

export default MenuList;
