import React, { useState } from 'react';

import useInput from '../hooks/input';
import InfoModal from '../UI/InfoModal';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './ContactForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isTenChars = (value) =>
  value.trim().length === 10 && Number.isInteger(+value);
const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value);

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState();

  const submitMessage = 'Form submitted, we will contact you shortly!';

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

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    try {
      setIsSubmitting(true);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone,
            comments: enteredComments,
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setIsSubmitting(false);
      setDidSubmit(true);
      resetName();
      resetEmail();
      resetPhone();
      resetComments();
    } catch (err) {
      setIsSubmitting(false);
      setError(err.message || 'An unknown error occurred, please try again');
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  const resetSubmitHandler = () => {
    setDidSubmit(false);
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

  const buttonClasses = `${formIsValid ? 'btn' : 'btn-disabled'}`;
  const formClasses = `${
    isSubmitting
      ? `${classes['contact-form']} ${classes.submitting}`
      : `${classes['contact-form']}`
  }`;

  return (
    <React.Fragment>
      {error && <InfoModal message={error} onClear={errorHandler} />}
      {didSubmit && (
        <InfoModal
          message={submitMessage}
          msgHeader={'Success!'}
          onClear={resetSubmitHandler}
        />
      )}
      <div className={classes['form-container']}>
        {isSubmitting && <LoadingSpinner asOverlay />}
        <form className={formClasses} onSubmit={submitHandler}>
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
              id="phoneNumber"
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
          <button
            className={buttonClasses}
            disabled={formIsValid ? false : true}
          >
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
