import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import Contact from './pages/ContactPage';
import SuccessPage from './pages/SuccessPage';

import HeaderNav from './components/header/HeaderNav';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import Notification from './components/UI/Notification';
import CartProvider from './components/store/CartProvider';
import ScrollToTop from './components/utilities/ScrollToTop';

import './App.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [featuredDishes, setFeaturedDishes] = useState([]);
  const [showNotification, setShowNotification] = useState(true);
  const notifyBackend =
    'Backend services may take a minute to startup and load Featured Items & Menu---your patience is appreciated!';

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const notificationHandler = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    const sendRequest = async () => {
      const randomIndex = (arraySize) => {
        return Math.floor(Math.random() * (arraySize - 1));
      };

      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/menu`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        const loadedDishes = [];

        data.forEach((dish) => {
          loadedDishes.push(dish);
        });

        setDishes(loadedDishes);

        const pastas = loadedDishes.filter((dish) => dish.type === 'pasta');
        const pizzas = loadedDishes.filter((dish) => dish.type === 'pizza');
        const desserts = loadedDishes.filter((dish) => dish.type === 'dessert');

        const cat1 = pastas[randomIndex(pastas.length)];
        const cat2 = pizzas[randomIndex(pizzas.length)];
        const cat3 = desserts[randomIndex(desserts.length)];

        setFeaturedDishes([cat1, cat2, cat3]);
      } catch (err) {
        console.log(err);
      }
    };

    sendRequest();
  }, []);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {showNotification && (
        <Notification onClear={notificationHandler} message={notifyBackend} />
      )}
      <HeaderNav onShowCart={showCartHandler} />
      <main className="main">
        <ScrollToTop>
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
            <Route path="/success">
              <SuccessPage />
            </Route>
          </Switch>
        </ScrollToTop>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
