import React from 'react';

import Modal from './Modal';
// import Button from '../FormElements/Button';

const ErrorModal = (props) => {
  return (
    <Modal onClose={props.onClear}>
      <h1>An Error Occurred!</h1>
      <p style={{ fontWeight: 'bold', fontSize: '12px' }}>{props.error}</p>
      <button className="btn-error" onClick={props.onClear}>
        Close
      </button>
    </Modal>
  );
};

export default ErrorModal;
