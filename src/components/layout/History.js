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
            Their 1st restaurant was a huge success over time, owing to their
            dedication to serving only the most delicious versions of
            traditional Italian dishes. Eventually they opened a new location in
            Downtown, which became a must for tourists visiting the area. In
            2003, they opened a new restaurant in Suburbia, which is a huge hub
            for takeout diners. Despite the success, the Manganiello family
            remains dedicated to providing traditional Italian home cooking
            surpassed by no one.
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
