import React from 'react';
import { Route, Link } from 'react-router-dom';

import ImageGrid from './ImageGrid';

import classes from './History.module.css'

const History = () => {
  const buttonClasses = `btn ${classes.button}`;

  return (
    <React.Fragment>
      <div className="flex-wrapper">
        <div className="container-img container-50">
          <ImageGrid />
        </div>
        <div className="container-text container-50 flex-column">
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
              doloribus necessitatibus fugit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Qui cumque voluptatum est quam
              dolores vel, sit accusamus id harum facilis eveniet nulla quis
              asperiores eius minus inventore, doloribus necessitatibus fugit.
            </p>
          </Route>
          <Route path="/home">
            <Link to="/about">
              <button className={buttonClasses}>Read More</button>
            </Link>
          </Route>
        </div>
      </div>
    </React.Fragment>
  );
};

export default History;
