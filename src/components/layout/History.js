import React from 'react';
import { Route, Link } from 'react-router-dom';

import ImageGrid from './ImageGrid';

const History = () => {
  return (
    <React.Fragment>
      <div className="container-text container-text-50">
        <ImageGrid />
      </div>
      <div className="container-text container-text-50 flex-column">
        <h2>Our History</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
        <Route path="/about">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            voluptatum est quam dolores vel, sit accusamus id harum facilis
            eveniet nulla quis asperiores eius minus inventore, doloribus
            necessitatibus fugit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui cumque voluptatum est quam dolores vel, sit
            accusamus id harum facilis eveniet nulla quis asperiores eius minus
            inventore, doloribus necessitatibus fugit.
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
          <Link className="btn" to="/about">
            Read More
          </Link>
        </Route>
      </div>
    </React.Fragment>
  );
};

export default History;
