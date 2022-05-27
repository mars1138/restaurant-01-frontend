import React, { useEffect, useState, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import MenuNav from './MenuNav';
import LoadingSpinner from '../UI/LoadingSpinner';
import MenuFiltered from './MenuFiltered';

// const menu = [
//   {
//     id: 0,
//     name: 'Spaghetti',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit, id laudantium laborum voluptas nesciunt, corporis a explicabo nulla hic vitae voluptatem soluta nostrum minima ratione suscipit deserunt eos error?',
//     price: 1.99,
//     type: 'pasta',
//     imgUrl: '/pexels-pablo-macedo-845811 (1).jpg',
//   },
//   {
//     id: 1,
//     name: 'Pizza',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit, id laudantium laborum voluptas nesciunt, corporis a explicabo nulla hic vitae voluptatem soluta nostrum minima ratione suscipit deserunt eos error?',
//     price: 1.99,
//     type: 'pizza',
//     imgUrl: '/pexels-pablo-macedo-845811 (1).jpg',
//   },
//   {
//     id: 2,
//     name: 'Awesome Salad',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit, id laudantium laborum voluptas nesciunt, corporis a explicabo nulla hic vitae voluptatem soluta nostrum minima ratione suscipit deserunt eos error?',
//     price: 1.99,
//     type: 'salad',
//     imgUrl: '/pexels-pablo-macedo-845811 (1).jpg',
//   },
//   {
//     id: 3,
//     name: 'Tiramisu',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit, id laudantium laborum voluptas nesciunt, corporis a explicabo nulla hic vitae voluptatem soluta nostrum minima ratione suscipit deserunt eos error?',
//     price: 1.99,
//     type: 'dessert',
//     imgUrl: '/pexels-pablo-macedo-845811 (1).jpg',
//   },
//   {
//     id: 4,
//     name: ' Greek Salad',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit, id laudantium laborum voluptas nesciunt, corporis a explicabo nulla hic vitae voluptatem soluta nostrum minima ratione suscipit deserunt eos error?',
//     price: 1.99,
//     type: 'salad',
//     imgUrl: '/pexels-pablo-macedo-845811 (1).jpg',
//   },
// ];

const MenuList = () => {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);

    const sendRequest = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/menu');

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        const loadedDishes = [];

        data.forEach(dish => {
          loadedDishes.push(dish);
        });

        setDishes(loadedDishes);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    sendRequest();
  }, []);

  const pastas = dishes.filter(dish => dish.type === 'pasta');
  const pizzas = dishes.filter(dish => dish.type === 'pizza');
  const salads = dishes.filter(dish => dish.type === 'salad');
  const desserts = dishes.filter(dish => dish.type === 'dessert');

  const pastaMenu = (
    <MenuFiltered dishes={pastas} type="Pasta" loading={isLoading} />
  );
  const pizzaMenu = (
    <MenuFiltered dishes={pizzas} type="Pizza" loading={isLoading} />
  );
  const saladMenu = (
    <MenuFiltered dishes={salads} type="Salad" loading={isLoading} />
  );
  const dessertMenu = (
    <MenuFiltered dishes={desserts} type="Dessert" loading={isLoading} />
  );

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
      </Suspense>
      )}
    </React.Fragment>
  );
};

export default MenuList;
