import React, { Component } from "react";
import PaymentForm from "redux-payment-form";
import { withRouter } from "react-router-dom";

class Payment extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  onCardChange(paymentForm) {
    console.log("payment form updated:", paymentForm);
  }

  render() {
    return (
      <div>
        <h3>You will recive an email of your recipt</h3>
        <PaymentForm
          onCardChange={this.onCardChange}
          acceptedCards={["visa", "american-express"]}
        />
        <button onClick={() => this.nextPath("/")}>Submit</button>
      </div>
    );
  }
}

export default Payment;
