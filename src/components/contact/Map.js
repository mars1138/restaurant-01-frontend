import React from 'react';

import classes from './Map.module.css';

const Map = () => {
  return (
    <div className={classes.map}>
      <div className="map-container">
          <iframe
            title="map"
          
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={
              'https://maps.google.com/maps?q=' +
              '47.6611864506836' +
              ',' +
              '-122.34007586894275' +
              '&t=&z=15&ie=UTF8&iwloc=&output=embed'
            }
          ></iframe>
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165"
          ></script>
          {/* <Map center={props.coordinates} zoom={16} /> */}
        </div>
    </div>
  );
};

export default Map;
