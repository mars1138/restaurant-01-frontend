import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputClass = ref ? `${classes.input}` : `${classes.inputContact}`;

  return (
    <div className={inputClass}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {props.input.type !== 'textarea' && <input ref={ref} {...props.input} />}
      {props.input.type === 'textarea' && (
        <textarea {...props.input} rows="5"></textarea>
      )}
    </div>
  );
});

export default Input;
