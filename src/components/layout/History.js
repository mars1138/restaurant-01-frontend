import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';

import ImageGrid from './ImageGrid';
import image from '../../assets/pexels-rachel-claire-4819658.jpg';
import classes from './History.module.css';
// import classes from './History.module.css';

const History = () => {
  const match = useRouteMatch();
  const containerClass = `container-text ${match.path === '/about' ? '' : ''}`;

  return (
    <section className="section">
      <div className="container">
        <Route path="/home">
          <ImageGrid />
        </Route>
        <Route path="/about">
          <div className={classes.mainImage}>
            <img src={image} alt="about" />
          </div>
        </Route>
        <div className={containerClass}>
          <h2>Our History</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit.
          </p>
          <Route path="/about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              cumque voluptatum est quam dolores vel, sit accusamus id harum
              facilis eveniet nulla quis asperiores eius minus inventore,
              doloribus necessitatibus fugit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Qui cumque voluptatum est quam
              dolores vel, sit accusamus id harum facilis eveniet nulla quis
              asperiores eius minus inventore, doloribus necessitatibus fugit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              cumque voluptatum est quam dolores vel, sit accusamus id harum
              facilis eveniet nulla quis asperiores eius minus inventore,
              doloribus necessitatibus fugit.
            </p>
          </Route>
          <Route path="/home">
            <Link className="btn" to="/about">
              Read More
            </Link>
          </Route>
        </div>
      </div>
    </section>
  );
};

export default History;
