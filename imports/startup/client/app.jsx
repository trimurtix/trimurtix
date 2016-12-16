import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { render } from 'react-dom';

export default class AppContainer extends Component {
	render () {
	    return (
				<main>
					{this.props.children}
				</main>
			)
	}
};
