import React from 'react';

import classes from './Section.module.css';

const Section = (props) => {
  const sectionClasses = `${classes.section} ${
    props.sectionClass ? classes[props.sectionClass] : ''
  }`;
  const containerClasses = `container ${
    props.containerClass ? props.containerClass : ''
  }`;

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>{props.children}</div>
    </section>
  );
};

export default Section;
