import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Offsite_services extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <h2>Offsite Services</h2>
        <h3>Shuttle Services</h3>
        <img
          src="http://picsum.photos/500/100"
          alt="Lorem Picsum Image"
          align="middle"
          hspace="10"
        />
        <h3>
          Lorem ipsum dolor sit ametk, consectetur adipiscing elit. Quisque quis
          tortor nunc. Nunc in aliquet dui. Ut vel lorem nec lacus feugiat
          imperdiet. Maecenas eleifend augue in venenatis blandit. Sed
          consectetur dapibus malesuada. Donec ac efficitur lectus, id tempus
          nisi. Nunc dignissim felis eu enim malesuada suscipit. Maecenas vel
          erat enim.
        </h3>
        <button onClick={() => this.nextPath("/shuttle_schedule")}>
          See Shuttle Schedule
        </button>

        <h3>Home Care Services</h3>
        <img
          src="http://picsum.photos/500/140"
          alt="Lorem Picsum Image"
          align="right"
          hspace="10"
        />
        <h3>
          Lorem ipsum dolor sit ametk, consectetur adipiscing elit. Quisque quis
          tortor nunc. Nunc in aliquet dui. Ut vel lorem nec lacus feugiat
          imperdiet. Maecenas eleifend augue in venenatis blandit. Sed
          consectetur dapibus malesuada. Donec ac efficitur lectus, id tempus
          nisi. Nunc dignissim felis eu enim malesuada suscipit. Maecenas vel
          erat enim.
        </h3>
        <button onClick={() => this.nextPath("/home_care_request")}>
          Request Home Care Services
        </button>
      </div>
    );
  }
}

export default Offsite_services;
