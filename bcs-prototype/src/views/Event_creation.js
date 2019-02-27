import React, { Component } from "react";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import { withRouter } from "react-router-dom";

class Event_creation extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consectetur in nisl eu suscipit. Duis eget magna a dui dignissim.
        </h4>
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
            <label for="addServices">Select Added Services</label>
            <select className="form-control" id="addServices">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <p>1) Added use of facility equipment</p>
            <p>2) Catering</p>
            <p>2) Both equipment and Catering</p>
          </div>
          <div className="form-group">
            <label for="addDetails">Enter Details</label>
            <textarea className="form-control" id="addDetails" rows="3" />
          </div>
        </form>
        <button onClick={() => this.nextPath("/payment")}>Submit</button>
      </div>
    );
  }
}

export default Event_creation;
