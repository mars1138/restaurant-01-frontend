import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span className={classes.title}>Ristorante San Giorgio</span>
      <ul>
        <li>
          <span>
            <strong>Address:</strong>
          </span>
          <span>1234 Main St.</span>
          <span>Smalltown, WA 98123</span>
        </li>
        <li>
          <span>
            <strong>Phone:</strong>
          </span>
          <span>(555) 555-5555</span>
        </li>
        <li>
          <span>
            <strong>Email:</strong>
          </span>
          <span>hello@sangiorgiorest.com</span>
        </li>
      </ul>
      <div className={classes.footerIcons}>
        <ion-icon
          className={classes.ion}
          size="large"
          src="/logo-facebook.svg"
        ></ion-icon>
        <ion-icon
          className={classes.ion}
          size="large"
          src="/logo-twitter.svg"
        ></ion-icon>
        <ion-icon
          className={classes.ion}
          size="large"
          src="/logo-instagram.svg"
        ></ion-icon>
        <ion-icon
          className={classes.ion}
          size="large"
          src="/mail-outline.svg"
        ></ion-icon>
      </div>
      <span>&copy; Copywright 2022 Ristorante San Giorgio</span>
    </footer>
  );
};

export default Footer;
