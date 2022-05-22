import useInput from '../hooks/input';
import classes from './Checkout.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isFiveChars = (value) => value.trim().length === 5;
const isTwelveChars = (value) => value.trim().length === 12;

const Checkout = (props) => {
  const {
    enteredInput: enteredName,
    enteredInputValid: enteredNameValid,
    inputInvalid: nameInputInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    enteredInput: enteredStreet,
    enteredInputValid: enteredStreetValid,
    inputInvalid: streetInputInvalid,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isNotEmpty);
  const {
    enteredInput: enteredCity,
    enteredInputValid: enteredCityValid,
    inputInvalid: cityInputInvalid,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);
  const {
    enteredInput: enteredZipCode,
    enteredInputValid: enteredZipCodeValid,
    inputInvalid: zipCodeInputInvalid,
    inputChangeHandler: zipCodeChangeHandler,
    inputBlurHandler: zipCodeBlurHandler,
    reset: resetZipCode,
  } = useInput(isFiveChars);
  const {
    enteredInput: enteredCC,
    enteredInputValid: enteredCCValid,
    inputInvalid: ccInputInvalid,
    inputChangeHandler: ccChangeHandler,
    inputBlurHandler: ccBlurHandler,
    reset: resetCC,
  } = useInput(isTwelveChars);

  let formIsValid = false;

  formIsValid =
    enteredNameValid &&
    enteredStreetValid &&
    enteredCityValid &&
    enteredZipCodeValid &&
    enteredCCValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      zipCode: enteredZipCode,
      creditCard: enteredCC,
    });

    resetName();
    resetStreet();
    resetCity();
    resetZipCode();
    resetCC();
  };

  const nameControlClasses = `${classes.control} ${
    nameInputInvalid ? classes.invalid : ''
  }`;
  const streetControlClasses = `${classes.control} ${
    streetInputInvalid ? classes.invalid : ''
  }`;
  const cityControlClasses = `${classes.control} ${
    cityInputInvalid ? classes.invalid : ''
  }`;
  const zipControlClasses = `${classes.control} ${
    zipCodeInputInvalid ? classes.invalid : ''
  }`;
  const ccControlClasses = `${classes.control} ${
    ccInputInvalid ? classes.invalid : ''
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputInvalid && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
        {streetInputInvalid && <p>Please enter a valid street !</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityInputInvalid && <p>Please enter a valid city !</p>}
      </div>
      <div className={zipControlClasses}>
        <label htmlFor="postal">Zip Code</label>
        <input
          type="text"
          id="postal"
          onChange={zipCodeChangeHandler}
          onBlur={zipCodeBlurHandler}
          value={enteredZipCode}
        />
        {zipCodeInputInvalid && (
          <p>Please enter a valid postal code (5 digits)!</p>
        )}
      </div>
      <div className={ccControlClasses}>
        <label htmlFor="postal">Credit Card</label>
        <input
          type="text"
          id="postal"
          onChange={ccChangeHandler}
          onBlur={ccBlurHandler}
          value={enteredCC}
        />
        {zipCodeInputInvalid && <p>Please enter a Credit Card# (12 digits)!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
