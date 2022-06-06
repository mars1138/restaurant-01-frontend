import React from 'react';
import { Route, Switch } from 'react-router-dom';

import image1 from '../../assets/pexels-narda-yescas-1566837.jpg';
import image2 from '../../assets/pexels-narda-yescas-1566837.jpg';
import image3 from '../../assets/pexels-pixabay-260922crop.jpg';
import classes from './HeroImage.module.css';

const HeroImage = () => {
  return (
    <React.Fragment>
      <div className={classes.bgImage}>
        <Route path="/about">
          <img src={image1} className={classes.bgImageContent} alt="hero" />
        </Route>
        <Route path="/menu">
          <img src={image2} className={classes.bgImageContent} alt="hero" />
        </Route>
        <Route path="/contact">
          <img src={image3} className={classes.bgImageContent} alt="hero" />
        </Route>
        <Route path="/success">
          <img src={image3} className={classes.bgImageContent} alt="hero" />
        </Route>
      </div>
      <div className={classes.heroHeader}>
        <Switch>
          <Route path="/success" exact>
            <h1>Thank You!</h1>
          </Route>
          <Route path="*">
            <h1>30 Years of Excellent Service</h1>
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default HeroImage;
