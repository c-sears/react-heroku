import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import brandLogo from '../assets/images/brand-logo-kwiri.png'


class NavBar extends Component {
  render() {
    return (
      <div>
        <Nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <Button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </Button>
              <a className="navbar-brand" href="/">
                <img className="nav-logo" src={brandLogo} alt="Kwiri" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/user">User</NavLink>
                </li>
                <li>
                  <NavLink to="/survey">Survey</NavLink>
                </li>
                <li>
                  <NavLink to="/results">Results</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
      </div>
    )
  }
}

export default NavBar;