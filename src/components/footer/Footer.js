import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>FOOTER</p>
      <br />
      <ul>
        <li>ADDRESS</li>
        <li>PHONE</li>
        <li>EMAIL</li>
      </ul>
      <br />
      <ul>
        <li>FACEBOOK ICON</li>
        <li>TWITTER ICON</li>
        <li>INSTAGRAM ICON</li>
      </ul>
    </footer>
  );
};

export default Footer;
