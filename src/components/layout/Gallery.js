import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LocImg1 from '../../assets/pexels-nancy-bourque-1148565.jpg';
import LocImg2 from '../../assets/pexels-life-of-pix-67468.jpg';
import LocImg3 from '../../assets/pexels-igor-starkov-1055054.jpg';

import aboutImg1 from '../../assets/about/pexels-andrea-piacquadio-3811603 (1).jpg';
import aboutImg2 from '../../assets/about/pexels-pixabay-262978.jpg';
import aboutImg3 from '../../assets/about/pexels-nancy-bourque-1148565.jpg';
import aboutImg4 from '../../assets/about/pexels-pixabay-128875.jpg';
import aboutImg5 from '../../assets/about/pexels-the-castlebar-5914437.jpg';
import aboutImg6 from '../../assets/about/pexels-eneida-nieves-905847.jpg';

import menuImg1 from '../../assets/menu/pexels-maria-orlova-4913349.jpg';
import menuImg2 from '../../assets/menu/pexels-iina-luoto-1211887.jpg';
import menuImg3 from '../../assets/menu/pexels-pixabay-262905.jpg';
import menuImg4 from '../../assets/menu/pexels-cottonbro-4253301.jpg';
import menuImg5 from '../../assets/menu/pexels-monicore-1391487.jpg';
import menuImg6 from '../../assets/menu/pexels-andrea-piacquadio-3755737.jpg';
import menuImg7 from '../../assets/menu/pexels-pixabay-327143.jpg';

import contactImg1 from '../../assets/contact/pexels-roman-odintsov-4551517.jpg';
import contactImg2 from '../../assets/contact/pexels-kenneth-2838588.jpg';

import successImg1 from '../../assets/pexels-pixabay-263564.jpg';

import classes from './Gallery.module.css';

const homeContent = (
  <div className={classes.slideshow}>
    <div className={classes.slide}>
      <img src={LocImg1} alt="location" />
      <div>
        <h3>Downtown</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum.
        </p>
      </div>
    </div>
    <div className={classes.slide}>
      <img src={LocImg2} alt="location" />
      <div>
        <h3>Suburbia</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum.
        </p>
      </div>
    </div>
    <div className={classes.slide}>
      <img src={LocImg3} alt="location" />
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
  <div className={classes['grid-about']}>
    <img
      src={aboutImg1}
      className={classes['about--1']}
      alt="restaurant misc"
    />
    <img
      src={aboutImg2}
      className={classes['about--2']}
      alt="restaurant misc"
    />
    <img
      src={aboutImg3}
      className={classes['about--3']}
      alt="restaurant misc"
    />
    <img src={aboutImg4} alt="restaurant misc" />
    <img src={aboutImg5} alt="restaurant misc" />
    <img src={aboutImg6} alt="restaurant misc" />
  </div>
);
const menuContent = (
  <div className={classes['grid-menu']}>
    <img src={menuImg1} className={classes['menu--1']} alt="restaurant misc" />
    <img src={menuImg2} className={classes['menu--2']} alt="restaurant misc" />
    <img src={menuImg3} className={classes['menu--3']} alt="restaurant misc" />
    <img src={menuImg4} className={classes['menu--4']} alt="restaurant misc" />
    <img src={menuImg5} alt="restaurant misc" />
    <img src={menuImg6} alt="restaurant misc" />
    <img src={menuImg7} alt="restaurant misc" />
  </div>
);
const contactContent = (
  <div className={classes['grid-contact']}>
    <img
      src={contactImg1}
      className={classes['contact--1']}
      alt="restaurant misc"
    />
    <img
      src={contactImg2}
      className={classes['contact--2']}
      alt="restaurant misc"
    />
  </div>
);
const successContent = (
  <div className={classes['grid-success']}>
    <img
      src={successImg1}
      className={classes['success--1']}
      alt="restaurant misc"
    />
    {/* <img
      src={contactImg2}
      className={classes['contact--2']}
      alt="restaurant misc"
    /> */}
  </div>
);

// const successContent = (
//   <div className={classes['grid-success']}>
//     <img src={successImg1} className={classes['success--1']} alt="success" />
//   </div>
// );

const Gallery = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home">{homeContent}</Route>
        <Route path="/about">{aboutContent}</Route>
        <Route path="/menu">{menuContent}</Route>
        <Route path="/contact">{contactContent}</Route>
        <Route path="/success">{successContent}</Route>
      </Switch>
    </React.Fragment>
  );
};

export default Gallery;
