import React from 'react';

import classes from './Section.module.css';

const Section = (props) => {
  const sectionClasses = `${classes.section} ${props.type}`;

  return <section className={sectionClasses}>{props.children}</section>;
};

export default Section;
