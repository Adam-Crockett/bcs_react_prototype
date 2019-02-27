import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";

class Request_shuttle extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <h2>Shuttle Request Form</h2>
        <img
          src="http://picsum.photos/500/122"
          alt="Lorem Picsum Image"
          align="middle"
          hspace="10"
        />
        <h3>Donec ac efficitur lectus, id tempus nisi.</h3>
        <form>
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
          <div>
            <p>Select a day</p>
            <Calendar />
          </div>
          <div className="form-group">
            <label for="addServices">Select A Shuttle</label>
            <select className="form-control" id="addServices">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </form>
        <button onClick={() => this.nextPath("/")}>Submit</button>
      </div>
    );
  }
}

export default Request_shuttle;
