import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeroVideo from '../layout/HeroVideo';
import HeroImage from '../layout/HeroImage';

import classes from './Hero.module.css';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Switch>
        <Route path="/home" exact>
          <HeroVideo />
        </Route>
        <Route path="*">
          <HeroImage />
        </Route>
      </Switch>
    </div>
  );
};

export default Hero;
