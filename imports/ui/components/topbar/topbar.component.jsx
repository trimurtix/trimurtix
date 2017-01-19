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
                  <svg className="icon"><use xlinkHref="#pc"></use></svg>
              </Link>
              <Link to="#" className="nootbook item">
                  <svg className="icon"><use xlinkHref="#nootbook"></use></svg>
              </Link>
              <Link to="#" className="tablet item">
                  <svg className="icon"><use xlinkHref="#tablet"></use></svg>
              </Link>
              <Link to="#" className="mobile item">
                  <svg className="icon"><use xlinkHref="#mobile"></use></svg>
              </Link>
          </div>

      </aside>
      )
  }

};
