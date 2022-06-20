import React, { useState } from 'react';

import useInput from '../hooks/input';
import InfoModal from '../UI/InfoModal';
import LoadingSpinner from '../UI/LoadingSpinner';
// import Input from '../UI/Input';
import classes from './ContactForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isTenChars = (value) =>
  value.trim().length === 10 && Number.isInteger(+value);
// const isValidEmail = value => value.trim().includes('@');
const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value);

//=============================================
// const isNumericInput = (event) => {
//   const key = event.keyCode;
//   return ((key >= 48 && key <= 57) || // Allow number line
//       (key >= 96 && key <= 105) // Allow number pad
//   );
// };

// const isModifierKey = (event) => {
//   const key = event.keyCode;
//   return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
//       (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
//       (key > 36 && key < 41) || // Allow left, up, right, down
//       (
//           // Allow Ctrl/Command + A,C,V,X,Z
//           (event.ctrlKey === true || event.metaKey === true) &&
//           (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
//       )
// };

// const enforceFormat = (event) => {
//   // Input must be of a valid number format or a modifier key, and not longer than ten digits
//   if(!isNumericInput(event) && !isModifierKey(event)){
//       event.preventDefault();
//   }
// };

// const formatToPhone = (event) => {
//   if(isModifierKey(event)) {return;}

//   const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
//   const areaCode = input.substring(0,3);
//   const middle = input.substring(3,6);
//   const last = input.substring(6,10);

//   if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
//   else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
//   else if(input.length > 0){event.target.value = `(${areaCode}`;}
// };

// const inputElement = document.getElementById('phoneNumber');
// inputElement.addEventListener('keydown',enforceFormat);
// inputElement.addEventListener('keyup',formatToPhone);

//=============================================

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
    console.log('contact form submitted!');

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
      console.log(responseData);

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
      console.log(err);
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
      {error && <InfoModal error={error} onClear={errorHandler} />}
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
