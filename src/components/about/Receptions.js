import React from 'react';

import image1 from '../../assets/pexels-craig-adderley-2306281.jpg';
import image2 from '../../assets/pexels-dimitri-kuliuk-2038258.jpg';
import classes from './Receptions.module.css';

const Receptions = () => {
  return (
    <div className="flex-column">
      <div className="container-text flex-column">
        <h2>Receptions and Gatherings</h2>
        <p>
          Our Old Town and Downtown locations are popular venues for hosting
          weddings, receptions, and other family gatherings. The downtown
          location offers an exceptional view. Openings are limited during the
          summer, so please contact us as soon as possible!
        </p>
      </div>
      <div className="container-img">
        <div className={classes['main-image']}>
          <img src={image2} alt="reception" className={classes.image} />
          <img src={image1} alt="wedding cake" className={classes.image} />
        </div>
      </div>
      <div className={classes.celebrate}>
        <strong>Celebrate With Us Like Family!</strong>
      </div>
    </div>
  );
};

export default Receptions;
