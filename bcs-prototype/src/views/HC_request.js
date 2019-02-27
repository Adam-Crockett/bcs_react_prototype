import React, { Component } from "react";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import { withRouter } from "react-router-dom";

class HC_request extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <h2>Home Care Request Form</h2>
        <img
          src="http://picsum.photos/400/150"
          alt="Lorem Picsum Image"
          align="middle"
          hspace="10"
        />
        <h3>
          Lorems ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          tortor nunc. Nunc in aliquet dui. Sed consectetur dapibus malesuada.
          Donec ac efficitur lectus, id tempus nisi.
        </h3>
        <form>
          <label for="dateTimePicker">Select Date and Time</label>
          <DateTimeRangePicker />
          <div className="form-group">
            <label for="exampleFormControlInput1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label for="phoneNumberInput">Phone Number</label>
            <input
              type="phone"
              className="form-control"
              id="phoneNumberInput"
              placeholder="123 456 7890"
            />
          </div>
          <div className="form-group">
            <label for="phoneNumberInput">Address</label>
            <input
              type="address"
              className="form-control"
              id="addressInput"
              placeholder="123 456 7890"
            />
          </div>
          <div className="form-group">
            <label for="addDetails">Enter Details</label>
            <textarea className="form-control" id="addDetails" rows="3" />
          </div>
        </form>
        <h3>We will contact you to finalize Hone Care Services</h3>
        <button onClick={() => this.nextPath("/")}>Submit</button>
      </div>
    );
  }
}

export default HC_request;
