import React, { Suspense, useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import Contact from './pages/ContactPage';

import LoadingSpinner from './components/UI/LoadingSpinner';
import HeaderNav from './components/header/HeaderNav';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import CartProvider from './components/store/CartProvider';

import './App.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [featuredDishes, setFeaturedDishes] = useState([]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  useEffect(() => {
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

        const pastas = loadedDishes.filter(dish => dish.type === 'pasta');
        const pizzas = loadedDishes.filter(dish => dish.type === 'pizza');
        const desserts = loadedDishes.filter(dish => dish.type === 'dessert');

        setFeaturedDishes([pastas[0], pizzas[0], desserts[0]]);
      } catch (err) {
        console.log(err);
      }
    };

    sendRequest();
  }, []);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <HeaderNav onShowCart={showCartHandler} />
      <main className="main">
        <Suspense
          fallback={
            <div>
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home featured={featuredDishes} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/menu">
              <MenuPage menu={dishes} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
