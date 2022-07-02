import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <React.Fragment>
      <div className="container-text  flex-column">
        <h2>Your Order Has been submitted</h2>
        <p>
          We will send you an email confirmation as soon as your order has been
          processed. You will receive a follow up email informing you when your
          order is ready for pickup at the location and approximate time
          requested. Thank you for choosing Ristorante San Giorgio!
        </p>

        <Link to="/home">
          <button className="btn">Return to Main Page</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Success;
