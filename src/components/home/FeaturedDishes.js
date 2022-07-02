import React from 'react';

import Card from '../UI/Card';
import image1 from '../../assets/pexels-hiral-chavda-8545576.jpg';
import classes from './FeaturedDishes.module.css';

const FeaturedDishes = (props) => {
  const ListDishes = (dishes) => {
    return dishes.map((dish) => (
      <li key={dish.id}>
        <Card>
          <img
            src={`${process.env.REACT_APP_FRONTEND_URL}/img/menu/${dish.imgUrl}`}
            alt={dish.name}
          />
          <div className={classes.dishInfo}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        </Card>
      </li>
    ));
  };

  return (
    <React.Fragment>
      <div className="container-text flex-column">
        <h2>Featured Dishes</h2>
        <p>
          Our establishments feature a wide variety of Italian dishes---some well known, others more eclectic. From pasta to pizzas to desserts, here are a few that deserve special recognition.  Visit one of our locations or order online---we'd be happy to cook for you!
        </p>
      </div>
      <div className={classes.featured}>
        <ul className={classes.list}>
          {props.featured ? ListDishes(props.featured) : ''}
        </ul>
        <div className={classes.mainImage}>
          <img src={image1} alt="featured" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedDishes;
