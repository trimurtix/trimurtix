import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { render } from 'react-dom';

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
	}
  render() {
      return (
        <div className="Sidebar">
          barra do topo
        </div>
      )
  }

};
