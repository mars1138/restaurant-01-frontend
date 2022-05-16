import React from 'react';
import { Route } from 'react-router-dom';

import image1 from '../../assets/pexels-pablo-macedo-845811 (1).jpg';
import classes from './ImageGrid.module.css';

const ImageGrid = () => {
  return (
    <React.Fragment>
      <div className={classes.grid}>
        <Route path="/about">
          <div className={classes.about1}>
            <img src={image1} alt="about" />
          </div>
        </Route>
        <Route path="/home">
          <div className={classes.home1}>
            <img src={image1} alt="history1" />
          </div>
          <div className={classes.home2}>
            <img src={image1} alt="history2" />
          </div>
          <div className={classes.home3}>
            <img src={image1} alt="history3" />
          </div>
        </Route>
      </div>
    </React.Fragment>
  );
};

export default ImageGrid;
