import React from 'react';

import image1 from '../../assets/menu/pexels-darya-sheydel-10456297.jpg';
import classes from './OrderOnline.module.css';

const FeaturedDishes = () => {
  return (
    <div className="flex-wrapper">
      <div className="container-text container-50 flex-column">
        <h2>Order Online</h2>
        <p>
          While we promote the dine-in experience above all, we have a limited
          number of dishes you can order for take out. These are all available
          at every one of our locations.
        </p>
        <p>
          Our dine-in locations offer an extended menu, with each location
          having an even greater selection of dishes that varies depending on
          the season and locale. We encourage you to try both, and tell your
          friends and family!
        </p>
      </div>
      <div className={classes.mainImage}>
        <img src={image1} alt="featured" />
      </div>
    </div>
  );
};

export default FeaturedDishes;
