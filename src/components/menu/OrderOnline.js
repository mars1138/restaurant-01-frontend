import React from 'react';

import image1 from '../../assets/pexels-pablo-macedo-845811 (1).jpg';
import classes from './OrderOnline.module.css';

const FeaturedDishes = () => {
  console.log(image1);

  return (
    <React.Fragment>
      <div className="container-text flex-column">
        <h2>Order Online</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
      </div>
      <div className={classes.featured}>
        <div className={classes.mainImage}>
          <img src={image1} alt="featured" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedDishes;
