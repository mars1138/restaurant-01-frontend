import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import Contact from './pages/ContactPage';

import LoadingSpinner from './components/UI/LoadingSpinner';
import HeaderNav from './components/header/HeaderNav';
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
    </React.Fragment>
  );
}

export default App;
