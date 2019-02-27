import React, { Component } from "react";
import { Route, NavLink, HashRouter, withRouter } from "react-router-dom";
import Home from "./views/Home";
import Events from "./views/Events";
import Classes from "./views/Classes";
import Offsite_services from "./views/Offsite_services";
import SignIn from "./views/SignIn";
import Event_creation from "./views/Event_creation";
import Payment from "./views/Payment";
import Request_shuttle from "./views/Request_shuttle";
import HC_request from "./views/HC_request";
import Class_signup from "./views/Class_signup";
import Shuttle_schedule from "./views/Shuttle_schedule";

class App extends Component {
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
            <Route path="/event_creation" component={Event_creation} />
            <Route path="/payment" component={Payment} />
            <Route path="/class_signup" component={Class_signup} />
            <Route path="/home_care_request" component={HC_request} />
            <Route path="/shuttle_schedule" component={Shuttle_schedule} />
            <Route path="/request_shuttle" component={Request_shuttle} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
