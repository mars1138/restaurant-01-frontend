import React from 'react';
import { Route } from 'react-router-dom';

import LocImg from '../../assets/pexels-rachel-claire-4819658.jpg';
import classes from './Gallery.module.css';

const homeContent = (
  <div className={classes.slideshow}>
    <div className={classes.slide}>
      <img src={LocImg} alt="location" />
      <div>
        <h3>Downtown</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum.
        </p>
      </div>
    </div>
    <div className={classes.slide}>
      <img src={LocImg} alt="location" />
      <div>
        <h3>Suburbia</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum.
        </p>
      </div>
    </div>
    <div className={classes.slide}>
      <img src={LocImg} alt="location" />
      <div>
        <h3>Old Town</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum.
        </p>
      </div>
    </div>
  </div>
);
const aboutContent = (
  <div className={classes.grid}>
    <img src={LocImg} className={classes['img--1']} alt="restaurant misc" />
    <img src={LocImg} className={classes['img--2']} alt="restaurant misc" />
    <img src={LocImg} className={classes['img--3']} alt="restaurant misc" />
    <img src={LocImg} className={classes['img--4']} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" />
  </div>
);

const Gallery = () => {
  return (
    <React.Fragment>
      <Route path="/home">{homeContent}</Route>
      <Route path="/about">{aboutContent}</Route>
      <Route path="/menu">{aboutContent}</Route>
    </React.Fragment>
  );
};

export default Gallery;
