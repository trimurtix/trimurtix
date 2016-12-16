import React, { Component } from 'react';
import { render } from 'react-dom';
import {browserHistory } from 'react-router';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="LandingPage">
        <h1 className="logo">
          <img src="images/logo-white.png" height="220" alt="Trimurtix - Developer tools platform" />
        </h1>
      </div>
    );
  }
}
