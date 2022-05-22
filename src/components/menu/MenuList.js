import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import MenuNav from './MenuNav';
import MenuFiltered from './MenuFiltered';

const menu = [
  {
    id: 0,
    name: 'Spaghetti',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit, id laudantium laborum voluptas nesciunt, corporis a explicabo nulla hic vitae voluptatem soluta nostrum minima ratione suscipit deserunt eos error?',
    price: 1.99,
    type: 'pasta',
    imgUrl: '/pexels-pablo-macedo-845811 (1).jpg',
  },
  {
    id: 1,
    name: 'Pizza',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit, id laudantium laborum voluptas nesciunt, corporis a explicabo nulla hic vitae voluptatem soluta nostrum minima ratione suscipit deserunt eos error?',
    price: 1.99,
    type: 'pizza',
    imgUrl: '/pexels-pablo-macedo-845811 (1).jpg',
  },
  {
    id: 2,
    name: 'Awesome Salad',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit, id laudantium laborum voluptas nesciunt, corporis a explicabo nulla hic vitae voluptatem soluta nostrum minima ratione suscipit deserunt eos error?',
    price: 1.99,
    type: 'salad',
    imgUrl: '/pexels-pablo-macedo-845811 (1).jpg',
  },
  {
    id: 3,
    name: 'Tiramisu',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit, id laudantium laborum voluptas nesciunt, corporis a explicabo nulla hic vitae voluptatem soluta nostrum minima ratione suscipit deserunt eos error?',
    price: 1.99,
    type: 'dessert',
    imgUrl: '/pexels-pablo-macedo-845811 (1).jpg',
  },
  {
    id: 4,
    name: ' Greek Salad',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit, id laudantium laborum voluptas nesciunt, corporis a explicabo nulla hic vitae voluptatem soluta nostrum minima ratione suscipit deserunt eos error?',
    price: 1.99,
    type: 'salad',
    imgUrl: '/pexels-pablo-macedo-845811 (1).jpg',
  },
];
const pastas = menu.filter((dish) => dish.type === 'pasta');
const pizzas = menu.filter((dish) => dish.type === 'pizza');
const salads = menu.filter((dish) => dish.type === 'salad');
const desserts = menu.filter((dish) => dish.type === 'dessert');

const MenuList = () => {
  useEffect(() => {
    console.log(menu);
  }, []);

  const pastaMenu = <MenuFiltered dishes={pastas} type="Pasta" />;
  const pizzaMenu = <MenuFiltered dishes={pizzas} type="Pizza" />;
  const saladMenu = <MenuFiltered dishes={salads} type="Salad" />;
  const dessertMenu = <MenuFiltered dishes={desserts} type="Dessert" />;

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

      <Switch>
        <Route path="/menu" exact>
          {saladMenu}
          {pastaMenu}
          {pizzaMenu}
          {dessertMenu}
        </Route>
        <Route path="/menu/pasta" exact>
          {pastaMenu}
        </Route>
        <Route path="/menu/pizza" exact>
          {pizzaMenu}
        </Route>
        <Route path="/menu/dessert" exact>
          {dessertMenu}
        </Route>
        <Route path="/menu/salads" exact>
          {saladMenu}
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default MenuList;
