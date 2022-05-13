import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <span>
            <strong>Address:</strong>
          </span>
          <br />
          <span>1234 Main St.</span>
          <br />
          <span>Smalltown, WA 98123</span>
        </li>
        <li>
          <span>
            <strong>Phone:</strong>
          </span>
          <br />
          <span>(555) 555-5555</span>
        </li>
        <li>
          <span>
            <strong>Email:</strong>
          </span>
          <br />
          <span>hello@sangiorgiorest.com</span>
        </li>
      </ul>
      <div className={classes.footerIcons}>
        <p>FACEBOOK</p>
        <p>TWITTER</p>
        <p>INSTAGRAM</p>
      </div>
      <span>&copy; Copywright 2022 Ristorante San Giorgio</span>
    </footer>
  );
};

export default Footer;
