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
            <div className="sidebar left">
                <h1 className="logo">
                    <Link to="#" title="">
                        <img src="images/icon-white.svg" width="72" />
                    </Link>
                </h1>
                <nav className="menu v-menu">
                    <div className="item">
                        <Link to="#" title="">
                            <img src="icons/pages.svg" width="26" />
                            <span>pages</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#" title="">
                            <img src="icons/templates.svg" width="26" />
                            <span>templates</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#" title="">
                            <img src="icons/files.svg" width="26" />
                            <span>files</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#" title="">
                            <img src="icons/styles.svg" width="26" />
                            <span>styles</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#" title="">
                            <img src="icons/database.svg" width="26" />
                            <span>database</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#" title="">
                            <img src="icons/settings.svg" width="26" />
                            <span>settings</span>
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="sidebar right">
                <header className="sidebar-header">
                    <h2 className="sidebar-title">Element Properties</h2>
                    <strong className="sidebar-subtitle">DIV.row</strong>
                </header>
                abc
            </div>
        </div>
      )
  }

};


// <div className="sidebar-content">
//     <div className="collapse">
//         <div className="collapse-item">
//             <input id="tab-one" type="radio" name="collapse-group">
//             <label htmlFor="tab-one">General <svg className="tmx-icon-chevron-right"><use xlinkHref="#tmx-icon-chevron-right"></use></svg></label>
//             <div className="collapse-content">
//                 <div className="box-fields">
//                     <strong className="label">
//                         float
//                     </strong>
//                 </div>

//                 <div className="box-fields">
//                     <strong className="label">
//                         display
//                     </strong>
//                     <div className="select-field">
//                         <svg className="tmx-icon-chevron-down"><use xlinkHref="#tmx-icon-chevron-down"></use></svg>
//                         <select name="select-display">
//                             <option id="1">inline</option>
//                             <option id="1">inline-block</option>
//                             <option id="1">none</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="collapse-item">
//             <input id="tab-two" type="radio" name="collapse-group">
//             <label htmlFor="tab-two">Content <svg className="tmx-icon-chevron-right"><use xlinkHref="#tmx-icon-chevron-right"></use></svg></label>
//             <div className="collapse-content">
//                 <p>Text</p>
//             </div>
//         </div>
//         <div className="collapse-item">
//             <input id="tab-three" type="radio" name="collapse-group">
//             <label htmlFor="tab-three">Background <svg className="tmx-icon-chevron-right"><use xlinkHref="#tmx-icon-chevron-right"></use></svg></label>
//             <div className="collapse-content">
//                 <p>Text</p>
//             </div>
//         </div>
//     </div>
// </div>