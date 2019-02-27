import React, { Component } from "react";
import { Route, NavLink, HashRouter, withRouter } from "react-router-dom";
import Home from "./views/Home";
import Events from "./views/Events";
import Classes from "./views/Classes";
import Offsite_services from "./views/Offsite_services";
import SignIn from "./views/SignIn";

class App extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Best Community Service</h1>
          <h2>Helping the community in the best ways!</h2>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/offsite_services">Off-Site Services</NavLink>
            </li>
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/classes" component={Classes} />
            <Route path="/offsite_services" component={Offsite_services} />
            <Route path="/signin" component={SignIn} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
