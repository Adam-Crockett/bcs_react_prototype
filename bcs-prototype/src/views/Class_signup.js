import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";

class HC_request extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <h2>Class Sign Up</h2>
        <img
          src="http://picsum.photos/500/150"
          alt="Lorem Picsum Image"
          align="middle"
          hspace="10"
        />
        <h3>
          Sed consectetur dapibus malesuada. Donec ac efficitur lectus, id
          tempus nisi.
        </h3>
        <form>
          <p>Select a Class from the calendar</p>
          <Calendar />
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
        </form>
        <button onClick={() => this.nextPath("/")}>Submit</button>
      </div>
    );
  }
}

export default HC_request;
