import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";

class Shuttle_schedule extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <h2>Schedule of our town's shuttle service</h2>
        <img
          src="http://picsum.photos/500/110"
          alt="Lorem Picsum Image"
          align="middle"
          hspace="10"
        />
        <h3>Select a day to see routes</h3>
        <Calendar />
        <h3>
          Lorems ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          tortor nunc. Nunc in aliquet dui. Ut vel lorem nec lacus feugiat
          imperdiet. Maecenas eleifend augue in venenatis blandit. Sed
          consectetur dapibus malesuada. Donec ac efficitur lectus, id tempus
          nisi.
        </h3>
        <button onClick={() => this.nextPath("/request_shuttle")}>
          Request Shuttle
        </button>
      </div>
    );
  }
}

export default Shuttle_schedule;
