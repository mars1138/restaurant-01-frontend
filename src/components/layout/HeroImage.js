import React from 'react';
import { Route } from 'react-router-dom';

import image1 from '../../assets/pexels-narda-yescas-1566837.jpg';
import image2 from '../../assets/pexels-narda-yescas-1566837.jpg';
import image3 from '../../assets/pexels-pixabay-260922.jpg';
import classes from './HeroImage.module.css';

const HeroImage = () => {
  return (
    // <section className="section">
    <React.Fragment>
      <div className={classes.bgImage}>
        <Route path='/about'>
          <img src={image1} className={classes.bgImageContent} alt="hero" />
        </Route>
        <Route path='/menu'>
          <img src={image2} className={classes.bgImageContent} alt="hero" />
        </Route>
        <Route path='/contact'>
          <img src={image3} className={classes.bgImageContent} alt="hero" />
        </Route>
      </div>
      <div className="center heroHeader">
        <h1>30 Years of Excellent Service</h1>
      </div>
    </React.Fragment>
    // </section>
  );
};

export default HeroImage;
