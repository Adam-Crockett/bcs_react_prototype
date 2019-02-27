import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";

class Classes extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <h2>Come see our offering of classes</h2>
        <img
          src="http://picsum.photos/400/150"
          alt="Lorem Picsum Image"
          align="middle"
          hspace="10"
        />
        <h3>
          Lorems ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          tortor nunc. Nunc in aliquet dui. Ut vel lorem nec lacus feugiat
          imperdiet. Maecenas eleifend augue in venenatis blandit. Sed
          consectetur dapibus malesuada. Donec ac efficitur lectus, id tempus
          nisi.
        </h3>
        <Calendar />
        <p>
          Sed consectetur dapibus malesuada. Donec ac efficitur lectus, id
          tempus nisi.
        </p>
        <button onClick={() => this.nextPath("/class_signup")}>
          Join A Class
        </button>
      </div>
    );
  }
}

export default Classes;
