import React from 'react';

import image from '../../assets/pexels-pablo-macedo-845811 (1).jpg';
import classes from './HeroImage.module.css';

const HeroImage = () => {
  return (
    <section className="section">
      <div className={classes.bgImage}>
        <img src={image} className={classes.bgImageContent} alt="hero" />
      </div>
      <div className="center heroHeader">
        <h1>30 Years of Excellent Service</h1>
      </div>
    </section>
  );
};

export default HeroImage;
