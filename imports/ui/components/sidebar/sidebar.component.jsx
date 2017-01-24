import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { render } from 'react-dom';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

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
                        <Link to="pages" title="">
                            <svg className="icon">
                              <use xlinkHref="#pages" />
                            </svg>
                            <span>pages</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="templates" title="">
                            <svg className="icon">
                              <use xlinkHref="#templates" />
                            </svg>
                            <span>templates</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="files" title="">
                            <svg className="icon">
                              <use xlinkHref="#files" />
                            </svg>
                            <span>files</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="styles" title="">
                            <svg className="icon">
                              <use xlinkHref="#styles" />
                            </svg>
                            <span>styles</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="database" title="">
                            <svg className="icon">
                              <use xlinkHref="#database" />
                            </svg>
                            <span>database</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="settings" title="">
                            <svg className="icon">
                              <use xlinkHref="#settings" />
                            </svg>
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
                <div className="sidebar-content">
                    <div className="collapse">
                        <div className="collapse-item">
                            <input id="tab-one" type="radio" name="collapse-group" />
                            <label htmlFor="tab-one">General <svg className="icon"><use xlinkHref="#chevron-right"></use></svg></label>
                            <div className="collapse-content">
                                <div className="box-fields">
                                    <strong className="label">
                                        float
                                    </strong>
                                    <input id="input-name" className="input-field" type="text" name="input-name" placeholder="user@example.com" />
                                </div>

                                <div className="box-fields">
                                    <strong className="label">
                                        display
                                    </strong>
                                    <div className="select-field">
                                        <svg className="icon"><use xlinkHref="#chevron-down"></use></svg>
                                        <select name="select-display">
                                            <option id="1">inline</option>
                                            <option id="1">inline-block</option>
                                            <option id="1">none</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse-item">
                            <input id="tab-two" type="radio" name="collapse-group" />
                            <label htmlFor="tab-two">Content <svg className="icon"><use xlinkHref="#chevron-right"></use></svg></label>
                            <div className="collapse-content">
                                <p>Text</p>
                            </div>
                        </div>
                        <div className="collapse-item">
                            <input id="tab-three" type="radio" name="collapse-group" />
                            <label htmlFor="tab-three">Background <svg className="icon"><use xlinkHref="#chevron-right"></use></svg></label>
                            <div className="collapse-content">
                                <p>Text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
  }

};





//
// <Accordion>
//   <AccordionPanel heading='GENERAL'>
//       <div className="inner-accordion">
//         <strong className="label">Label</strong>
//         <div className="sidebar-box">
//         <FormField>
//           <TextInput id='item1'
//             name='item-1' />
//           </FormField>
//         </div>
//       </div>
//   </AccordionPanel>
//   <AccordionPanel heading='CONTENT'>
//       <div className="inner-accordion">
//         <strong className="label">Label</strong>
//         <div className="sidebar-box">abc</div>
//       </div>
//   </AccordionPanel>
//   <AccordionPanel heading='BACKGROUND'>
//       <div className="inner-accordion">
//         <strong className="label">Label</strong>
//         <div className="sidebar-box">abc</div>
//       </div>
//   </AccordionPanel>
// </Accordion>
