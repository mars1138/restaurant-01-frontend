import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

import LoadingSpinner from './components/UI/LoadingSpinner';
import HeaderNav from './components/header/HeaderNav';
import MenuItem from './components/menu/MenuItem';
import Footer from './components/footer/Footer';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <HeaderNav />
      <main>
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
              <HomePage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/menu" exact>
              <Menu />
            </Route>
            <Route path="/menu/:menuItem">
              <MenuItem />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
