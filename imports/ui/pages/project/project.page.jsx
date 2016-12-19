import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';

import Sidebar from '../../components/sidebar/sidebar.component.jsx';
import Topbar from '../../components/topbar/topbar.component';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Project">
        <Topbar />
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}
