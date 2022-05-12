import React from 'react';

import classes from './Section.module.css';

const Section = (props) => {
  const sectionClasses = `${classes.section} ${classes[props.type]}`;

  return (
    <section>
      <div className={sectionClasses}>{props.children}</div>
    </section>
  );
};

export default Section;
