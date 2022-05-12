import React from 'react';

import classes from './ImageGrid.module.css';

const ImageGrid = props => {
  const gridClasses = `${classes.gallery} ${classes[props.type]}`;

  return <div className={gridClasses}>{props.children}</div>;
};

export default ImageGrid;
