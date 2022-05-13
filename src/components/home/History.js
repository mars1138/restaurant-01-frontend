import React from 'react';
import { Link } from 'react-router-dom';

import ImageGrid from '../layout/ImageGrid';

const History = () => {
  return (
    <section className="section">
      <div className="container">
          <ImageGrid />
          <div className="container-text container-60">
            <h2>Our History</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              cumque voluptatum est quam dolores vel, sit accusamus id harum
              facilis eveniet nulla quis asperiores eius minus inventore,
              doloribus necessitatibus fugit.
            </p>
            <Link className="btn" to="/about">
              Read More
            </Link>
          </div>
        </div>
    </section>
  );
};

export default History;