import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Events extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <img
          src="http://picsum.photos/300/150"
          alt="Lorem Picsum Image"
          align="left"
          hspace="10"
        />
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          iaculis imperdiet purus, eu luctus felis luctus ac. Proin ultricies
          finibus mattis. Suspendisse ultrices auctor lorem quis auctor. Donec
          tincidunt turpis velit, ac eleifend sem feugiat ac. Sed vel eleifend
          quam. Pellentesque vitae dui convallis, mattis dui sed, gravida sem.
          Nunc in rhoncus neque, quis efficitur tortor. Quisque blandit leo
          risus, eu porttitor arcu ornare ut. Aliquam sed laoreet nisi. Quisque
          odio erat, feugiat et leo nec, commodo tempus neque. Proin a felis
          justo.
        </h3>
        <img
          src="http://picsum.photos/500/160"
          alt="Lorem Picsum Image"
          align="right"
          hspace="10"
        />
        <button onClick={() => this.nextPath("/event_creation")}>
          Create an Event Today!
        </button>
      </div>
    );
  }
}

export default Events;
