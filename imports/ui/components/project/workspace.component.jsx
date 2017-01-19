import 'grommet/scss/vanilla/index';
// node_modules/grommet/scss/vanilla

import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { render } from 'react-dom';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';

export default class Workspace extends Component {
	constructor(props) {
		super(props);
	}
  render() {
      return (
        <div className="Workspace">
        <App centered={false}>
          <Box pad='medium' className="box-container">
            aaa
          </Box>
        </App>
        </div>
      )
  }
};
