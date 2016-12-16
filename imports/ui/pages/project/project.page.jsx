import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Project">
        {this.props.children}
      </div>
    );
  }
}
