import React from 'react';

import image1 from '../../assets/pexels-pablo-macedo-845811 (1).jpg';
import classes from './ImageGrid.module.css';

const ImageGrid = () => {

  return (
    <div className={classes.grid}>
      <div className={classes.home1}>
        <img src={image1} alt="history1" />
      </div>
      <div className={classes.home2}>
        <img src={image1} alt="history2" />
      </div>
      <div className={classes.home3}>
        <img src={image1} alt="history3" />
      </div>
    </div>
  );
};

export default ImageGrid;
