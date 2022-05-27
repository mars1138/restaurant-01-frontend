import React from 'react';

import Modal from './Modal';
// import Button from '../FormElements/Button';

const InfoModal = props => {
  return (
    <Modal onClose={props.onClear}>
      <h1>{props.error ? 'An Error Occurred!' : `${props.msgHeader}`}</h1>
      <p style={{ fontWeight: 'bold', fontSize: '12px' }}>
        {props.error ? props.error : props.message}
      </p>
      <button className="btn-error" onClick={props.onClear}>
        Close
      </button>
    </Modal>
  );
};

export default InfoModal;
