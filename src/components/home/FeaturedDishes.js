import React from 'react';

import image1 from '../../assets/pexels-pablo-macedo-845811 (1).jpg';
import classes from './FeaturedDishes.module.css';

const FeaturedDishes = () => {
  console.log(image1);
  const featuredDishes = [
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque',
      imgUrl: image1,
    },
    {
      id: 2,
      name: 'Fetuccine Alfredo',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque',
      imgUrl: image1,
    },
    {
      id: 3,
      name: 'Tiramisu',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque',
      imgUrl: image1,
    },
  ];

  const ListDishes = dishes => {
    return dishes.map(dish => (
      <li key={dish.id}>
        <img src={dish.imgUrl} alt={dish.name} />
        <div className={classes.dishInfo}>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
        </div>
      </li>
    ));
  };

  return (
    <section className="section bg-awhite">
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
          <ul className={classes.list}>{ListDishes(featuredDishes)}</ul>
          <div className={classes.mainImage}>
            <img src={image1} alt="featured" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
