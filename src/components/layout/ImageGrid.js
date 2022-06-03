import React from 'react';
import { Route } from 'react-router-dom';

import image0 from '../../assets/pexels-rachel-claire-4819658-med.jpg';

import image1 from '../../assets/pexels-monicore-1087910.jpg';
import image2 from '../../assets/pexels-engin-akyurt-2619967.jpg';
import image3 from '../../assets/pexels-oleg-magni-8735993.jpg';

import classes from './ImageGrid.module.css';

const ImageGrid = () => {
  return (
    <div className={classes.grid}>
      <Route path="/about">
        <div className={classes.about1}>
          <img src={image0} alt="about" />
        </div>
      </Route>
      <Route path="/home">
        <div className={classes.home1}>
          <img src={image1} alt="history1" />
        </div>
        <div className={classes.home2}>
          <img src={image2} alt="history2" />
        </div>
        <div className={classes.home3}>
          <img src={image3} alt="history3" />
        </div>
      </Route>
    </div>
  );
};

export default ImageGrid;
