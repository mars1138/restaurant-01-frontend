import React from 'react';

import Modal from './Modal';
import classes from './InfoModal.module.css';

const InfoModal = (props) => {
  return (
    <Modal onClose={props.onClear}>
      <h2 className={classes['info-header']}>
        {/* {props.error ? 'An Error Occurred!' : `${props.msgHeader}`} */}
        An Error Occurred!
      </h2>
      <p className={classes.info}>
        {props.error ? props.error : 'Problem sending data...'}
      </p>
      {props.children}
      <button className="btn-error" onClick={props.onClear}>
        Close
      </button>
    </Modal>
  );
};

export default InfoModal;
