import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {props.input.type !== 'textarea' && <input ref={ref} {...props.input} />}
      {props.input.type === 'textarea' && (
        <textarea {...props.input} rows="5"></textarea>
      )}
    </div>
  );
});

export default Input;
