import React from 'react';

import LocImg from '../../assets/pexels-rachel-claire-4819658.jpg';
import classes from './Slideshow.module.css';

const Slideshow = () => {
  return (
    <div className={classes.slideshow}>
      <div className={classes.slide}>
        <img src={LocImg} alt="location" />
        <div>
          <h3>Location 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit.
          </p>
        </div>
      </div>
      <div className={classes.slide}>
        <img src={LocImg} alt="location" />
        <div>
          <h3>Location 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit.
          </p>
        </div>
      </div>
      <div className={classes.slide}>
        <img src={LocImg} alt="location" />
        <div>
          <h3>Location 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
