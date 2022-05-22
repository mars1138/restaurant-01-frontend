import React from 'react';

import useInput from '../hooks/input';
// import Input from '../UI/Input';
import classes from './ContactForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isTenChars = (value) => value.trim().length === 10;
const isValidEmail = (value) => value.trim().includes('@');

const ContactForm = () => {
  const {
    enteredInput: enteredName,
    enteredInputValid: enteredNameValid,
    inputInvalid: nameInputInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    enteredInput: enteredPhone,
    enteredInputValid: enteredPhoneValid,
    inputInvalid: phoneInputInvalid,
    inputChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isTenChars);
  const {
    enteredInput: enteredEmail,
    enteredInputValid: enteredEmailValid,
    inputInvalid: emailInputInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isValidEmail);
  const {
    enteredInput: enteredComments,
    inputInvalid: commentsInputInvalid,
    inputChangeHandler: commentsChangeHandler,
    reset: resetComments,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  formIsValid = enteredNameValid && enteredEmailValid && enteredPhoneValid;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('contact form submitted!');

    if (!formIsValid) return;

    // props.onConfirm({
    //   name: enteredName,
    //   street: enteredStreet,
    //   city: enteredCity,
    //   zipCode: enteredZipCode,
    //   creditCard: enteredCC,
    // });

    resetName();
    resetEmail();
    resetPhone();
    resetComments();
  };

  const nameControlClasses = `${classes.control} ${
    nameInputInvalid ? classes.invalid : ''
  }`;
  const emailControlClasses = `${classes.control} ${
    emailInputInvalid ? classes.invalid : ''
  }`;
  const phoneControlClasses = `${classes.control} ${
    phoneInputInvalid ? classes.invalid : ''
  }`;
  const commentsControlClasses = `${classes.control} ${
    commentsInputInvalid ? classes.invalid : ''
  }`;

  return (
    <React.Fragment>
      <div className={classes['form-container']}>
        <form className={classes['contact-form']} onSubmit={submitHandler}>
          <div className={nameControlClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
            {nameInputInvalid && <p>Please enter a valid name!</p>}
          </div>
          <div className={emailControlClasses}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailInputInvalid && <p>Please enter a valid email!</p>}
          </div>
          <div className={phoneControlClasses}>
            <label htmlFor="name">Phone</label>
            <input
              type="text"
              id="name"
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              value={enteredPhone}
            />
            {phoneInputInvalid && <p>Please enter a phone number!</p>}
          </div>
          <div className={commentsControlClasses}>
            <label htmlFor="name">Comments</label>
            <textarea
              type="textarea"
              id="comments"
              onChange={commentsChangeHandler}
              value={enteredComments}
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
