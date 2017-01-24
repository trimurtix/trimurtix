import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { render } from 'react-dom';

export default class WorkspaceContent extends Component {
	constructor(props) {
		super(props);
	}
  render() {
      return (
        <div className="WorkspaceContent">
          <ul>
            <li>lista</li>
            <li>lista</li>
            <li>lista</li>
            <li>lista</li>
          </ul>
          <h1>Lista lista lista</h1>
        </div>
      )
  }
};
