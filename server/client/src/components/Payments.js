import React from 'react';
import { connect } from 'react-redux';
import { handleToken } from "../actions";
import StripeCheckout from "react-stripe-checkout";

const Payments = props => {
  const { handleToken } = props;
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={ 500 }
      token={ token => handleToken(token) }
      stripeKey="pk_test_GgFVRotUw7evEqm4CxQ2YxJg00TknHWTiu"
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default connect(null, { handleToken })(Payments);
