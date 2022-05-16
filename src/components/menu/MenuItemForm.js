import React, { useRef, useState } from 'react';

import Input from '../../components/UI/Input.js';
import classes from './MenuItemForm.module.css';

const MenuItemForm = props => {
  const [qtyIsValid, setQtyIsValid] = useState(true);
  const qtyInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    console.log('Menu Item added to cart!');
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={qtyInputRef}
        label="Qty"
        input={{
          id: 'quantity',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className="btn">+ Add</button>
      {/* {!quantityIsValid && <p>Please enter a valid quantity (1-5).</p>} */}
    </form>
  );
};

export default MenuItemForm;
