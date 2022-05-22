import React, { Suspense, useState } from 'react';
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

// import logo from './logo.svg';
import './App.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

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
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/menu">
              <MenuPage />
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
