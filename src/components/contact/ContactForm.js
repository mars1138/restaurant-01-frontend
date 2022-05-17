import React from 'react';

import Input from '../UI/Input';
import classes from './ContactForm.module.css';

const ContactForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('contact form submitted!');
  };

  return (
    <React.Fragment>
      <div>
        <form className={classes.form} onSubmit={submitHandler}>
          <Input
            label="Name"
            input={{
              id: 'name',
              type: 'text',
            }}
          />
          <Input
            label="Email"
            input={{
              id: 'email',
              type: 'email',
            }}
          />
          <Input
            label="Phone"
            input={{
              id: 'phone',
              type: 'number',
            }}
          />
          <Input
            label="Street Address"
            input={{
              id: 'street address',
              type: 'text',
            }}
          />
          <Input
            label="Comment"
            input={{
              id: 'comment',
              type: 'textarea',
            }}
          />
          
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
