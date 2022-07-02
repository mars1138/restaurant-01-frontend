import React from 'react';

import image1 from '../../assets/pexels-tirachard-kumtanom-887827 (1).jpg';
import classes from './FeaturedChef.module.css';

const FeaturedChef = () => {
  return (
    <div className="flex-wrapper">
      <div className="container-text container-50 flex-column">
        <h2>Chef Lorenzo</h2>
        <p>
          Chef Lorenzo di Cividale is our head chef, based in our Old Town
          location. He learned the culinary arts at the Protissimo Culinary
          School, finishing at the top of his class. He was recruited by the
          Family, and has been instrumental is preserving the core philosophy of
          the ownership.
        </p>
        <p>
          Every year, Chef Lorenzo brings a team select sou chefs, line cooks,
          and service staff to do work/study visits at restaurants in a specific
          province or city in Italy. They learn the old country traditions and
          techniques and bring their valuable insight back home. This allows us
          to maintain the authenticity for which we are famous in the region.
        </p>
      </div>
      <div className={classes.featured}>
        <div className={classes['main-image']}>
          <img src={image1} alt="featured" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedChef;
