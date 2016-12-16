import React, { Component } from 'react';
import { render } from 'react-dom';
import {browserHistory } from 'react-router';

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Dashboard">
        {this.props.children}
      </div>
    );
  }
}
