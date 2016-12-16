import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Link } from 'react-router';

export default class NotFoundPage extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <div className="NotFound">
          <div className="inner">
            <h2>Essa página que você buscou não existe</h2>
            <p>Tente usar a busca ou então <Link to="/">Volte ao início</Link></p>
          </div>
        </div>
      </div>
    )
  }
};
