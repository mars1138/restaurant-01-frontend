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
const menuContent = (
  <div className={classes['grid-menu']}>
    <img src={LocImg} className={classes['menu--1']} alt="restaurant misc" />
    <img src={LocImg} className={classes['menu--2']} alt="restaurant misc" />
    <img src={LocImg} className={classes['menu--3']} alt="restaurant misc" />
    <img src={LocImg} className={classes['menu--4']} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" />
  </div>
);
const contactContent = (
  <div className={classes['grid-contact']}>
    <img src={LocImg} className={classes['contact--1']} alt="restaurant misc" />
    <img src={LocImg} className={classes['contact--2']} alt="restaurant misc" />
    {/* <img src={LocImg} className={classes['contact--3']} alt="restaurant misc" /> */}
    {/* <img src={LocImg} className={classes['contact--4']} alt="restaurant misc" /> */}
    {/* <img src={LocImg} alt="restaurant misc" />
    <img src={LocImg} alt="restaurant misc" /> */}
  </div>
);

const Gallery = () => {
  return (
    <React.Fragment>
      <Route path="/home">{homeContent}</Route>
      <Route path="/about">{menuContent}</Route>
      <Route path="/menu">{menuContent}</Route>
      <Route path="/contact">{contactContent}</Route>
    </React.Fragment>
  );
};

export default Gallery;
