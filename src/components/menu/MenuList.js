import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import MenuNav from './MenuNav';
import LoadingSpinner from '../UI/LoadingSpinner';
import MenuFiltered from './MenuFiltered';

const MenuList = props => {
  const pastas = props.menu.filter(dish => dish.type === 'pasta');
  const pizzas = props.menu.filter(dish => dish.type === 'pizza');
  const salads = props.menu.filter(dish => dish.type === 'salad');
  const desserts = props.menu.filter(dish => dish.type === 'dessert');

  const pastaMenu = <MenuFiltered dishes={pastas} type="Pasta" />;
  const pizzaMenu = <MenuFiltered dishes={pizzas} type="Pizza" />;
  const saladMenu = <MenuFiltered dishes={salads} type="Salad" />;
  const dessertMenu = <MenuFiltered dishes={desserts} type="Dessert" />;

  return (
    <React.Fragment>
      <div className="container-text flex-column">
        <h2>Online Menu</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
      </div>
      <MenuNav />
      <Suspense
        fallback={
          <div>
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/menu" exact>
            {saladMenu}
            {pastaMenu}
            {pizzaMenu}
            {dessertMenu}
          </Route>
          <Route path="/menu/pasta">
            <MenuFiltered dishes={pastas} type="Pasta" />;
          </Route>
          <Route path="/menu/pizza">
            <MenuFiltered dishes={pizzas} type="Pizza" />;
          </Route>
          <Route path="/menu/dessert">
            <MenuFiltered dishes={desserts} type="Dessert" />;
          </Route>
          <Route path="/menu/salads">
            <MenuFiltered dishes={salads} type="Salad" />;
          </Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default MenuList;
