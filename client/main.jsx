/*
 *
 * instashopper
 * @ main.jsx
 *
*/
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { renderRoutes } from '../imports/startup/client/routes.jsx';

Meteor.startup(() => {
  render(renderRoutes(),
    document.getElementById('tmx-app')
  );
});
