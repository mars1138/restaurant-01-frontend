import React from 'react';

import image from '../../assets/pexels-pablo-macedo-845811 (1).jpg';
import classes from './HeroImage.module.css';

const HeroImage = () => {
  const imgClasses = `${classes.bgImageContent} ${'center'}`;
  return (
    <div className={classes.bgImage}>
      <img src={image} className={imgClasses} alt="hero" />
    </div>
  );
};

export default HeroImage;
