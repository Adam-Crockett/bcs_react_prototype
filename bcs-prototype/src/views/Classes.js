import React, { Component } from "react";

class Classes extends Component {
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
        <button onClick={() => this.nextPath("/event_creation")}>
          Join A Class
        </button>
      </div>
    );
  }
}

export default Classes;
