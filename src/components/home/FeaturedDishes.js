import React from 'react';

import image1 from '../../assets/pexels-pablo-macedo-845811 (1).jpg';
import classes from './FeaturedDishes.module.css';

const FeaturedDishes = () => {
  return (
    <section className="section">
      <div className="container container-col">
        <div className="container-text">
          <h2>Featured Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit.
          </p>
        </div>
        <div className={classes.featured}>
          <ul className={classes.list}>
            <li>meal 1</li>
            <li>meal 2</li>
            <li>meal 3</li>
          </ul>
          <div className={classes.image}>
            <img src={image1} alt="featured" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
