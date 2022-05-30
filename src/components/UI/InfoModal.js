import React from 'react';

import Modal from './Modal';
import classes from './InfoModal.module.css';
// import Button from '../FormElements/Button';

const InfoModal = (props) => {
  return (
    <Modal onClose={props.onClear}>
      <h1 className={classes['info-header']}>
        {props.error ? 'An Error Occurred!' : `${props.msgHeader}`}
      </h1>
      <p className={classes.info}>
        {props.error ? props.error : props.message}
      </p>
      {props.children}
      <button className="btn-error" onClick={props.onClear}>
        Close
      </button>
    </Modal>
  );
};

export default InfoModal;
