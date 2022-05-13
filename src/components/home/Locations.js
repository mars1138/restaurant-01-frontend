import React from 'react';

import Slideshow from '../layout/Slideshow';

const Locations = () => {
  return (
    <section className="section">
      <div className="container container-col">
        <div className="container-text">
          <h2>Locations</h2>
          <p>Visit us at one of our fabulous locations across the Puget Sound</p>
          <Slideshow />
        </div>
      </div>
    </section>
  );
};

export default Locations;
