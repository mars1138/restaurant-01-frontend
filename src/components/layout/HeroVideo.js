import React from 'react';

import video from '../../assets/istockphoto-913975052-640_adpp_is.mp4';
import classes from './HeroVideo.module.css';

const HeroVideo = () => {
  return (
    <React.Fragment>
      <div className={classes.bgVideo}>
        <video className={classes.bgVideoContent} autoPlay muted loop>
          <source src={video} type="video/mp4" />
          You browser does not support video!
        </video>
      </div>
      <div className="heroHeader">
        <h1>The Very Best Italian Cuisine</h1>
      </div>
    </React.Fragment>
  );
};

export default HeroVideo;
