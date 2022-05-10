import React from 'react';

const ContactForm = () => {
  return (
    <React.Fragment>
      <div>
        <form>
          <div>
            <label htmlFor=""></label>
            <input id="name" type="text" placeholder="Name" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input id="email" type="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input id="comments" type="textarea" placeholder="Comments" />
          </div>
        </form>
      </div>
      <div>
        <p>MAP</p>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
