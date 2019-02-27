import React, { Component } from "react";
import Calendar from "react-calendar";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";

class Events extends Component {
  render() {
    return (
      <div>
        <Calendar />
        <DateTimeRangePicker />
      </div>
    );
  }
}

export default Events;
