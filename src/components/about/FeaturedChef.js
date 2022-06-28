import React from 'react';

import image1 from '../../assets/pexels-tirachard-kumtanom-887827 (1).jpg';
import classes from './FeaturedChef.module.css';

const FeaturedDishes = () => {
  return (
    <div className="flex-wrapper">
      <div className="container-text container-50 flex-column">
        <h2>Chef Lorenzo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
      </div>
      <div className={classes.featured}>
        <div className={classes['main-image']}>
          <img src={image1} alt="featured" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedDishes;
