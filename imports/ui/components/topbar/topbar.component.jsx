import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { render } from 'react-dom';

export default class Topbar extends Component {
	constructor(props) {
		super(props);
	}
  render() {
      return (
        <aside className="topbar">
          
          
          <div className="label autosave">
              <img src="icons/autosave.svg" height="18" />
              <span>AUTOSAVE</span>
          </div>

          
          <div className="viewports menu h-menu">
              <Link to="#" className="desktop item active">
                  <img src="icons/pc.svg" height="22" />
              </Link>
              <Link to="#" className="nootbook item">
                  <img src="icons/nootbook.svg" height="22" />
              </Link>
              <Link to="#" className="tablet item">
                  <img src="icons/tablet.svg" height="22" />
              </Link>
              <Link to="#" className="mobile item">
                  <img src="icons/mobile.svg" height="22" />
              </Link>
          </div>

      </aside>
      )
  }

};
