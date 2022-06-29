import React from 'react';
import { Route, Link } from 'react-router-dom';

import ImageGrid from './ImageGrid';

import classes from './History.module.css';

const History = () => {
  const buttonClasses = `btn ${classes.button}`;

  return (
    <div className="flex-wrapper">
      <div className="container-img container-50">
        <ImageGrid />
      </div>
      <div className="container-text container-50">
        <h2>Our History</h2>
        <p>
          We are proud to have been providing excellent Italian cuisine in the
          area over several generations. Our specialty is providing authentic
          recipes inspired by native Italian methods. We strive to give you the
          best dine-in experience possible.
        </p>
        <Route path="/about">
          <p>
            What started out as the life long dream of a young Italian family
            has grown into a local staple. Giuseppe and Sofia Manganiello
            started out as a young couple managing a trattoria in Campania. The
            small restaurant had been in the family for a long time, but times
            were tough in the post war years. Eventually they emigrated to the
            United States, finding their way to our town and establishing a new
            small restaurant on the corner of 5th and Main.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui cumque voluptatum est quam dolores vel, sit
            accusamus id harum facilis eveniet nulla quis asperiores eius minus
            inventore, doloribus necessitatibus fugit.
          </p>
        </Route>
        <Route path="/home">
          <Link to="/about">
            <button className={buttonClasses}>Read More</button>
          </Link>
        </Route>
      </div>
    </div>
  );
};

export default History;
