/*
 *
 * trimurtix
 * @ Routes
 *
*/
import React from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';

// Containers
import AppContainer from '../../startup/client/app.jsx';

// Pages
import LandingPage from '../../ui/pages/landing/landing.page.jsx';
import DashboardPage from '../../ui/pages/dashboard/dashboard.page.jsx';
import ProjectPage from '../../ui/pages/project/project.page.jsx';
import NotFoundPage from '../../ui/pages/not-found/not-found.page.jsx';

// Components
import Dashboard from '../../ui/components/dashboard/dashboard.component.jsx';

import Workspace from '../../ui/components/project/workspace.component.jsx';
import Pages from '../../ui/components/project/pages.component.jsx';
import Templates from '../../ui/components/project/templates.component.jsx';
import Files from '../../ui/components/project/files.component.jsx';
import Styles from '../../ui/components/project/styles.component.jsx';
import Database from '../../ui/components/project/database.component.jsx';
import Settings from '../../ui/components/project/settings.component.jsx';

export const renderRoutes = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={LandingPage} />

      <Route path="dashboard" component={DashboardPage}>
        <IndexRoute component={Dashboard} />
      </Route>

      <Route path="project" component={ProjectPage}>
        <IndexRoute component={Workspace} />
        <Route path="/pages" component={Pages}/>
        <Route path="/templates" component={Templates}/>
        <Route path="/files" component={Files}/>
        <Route path="/styles" component={Styles}/>
        <Route path="/database" component={Database}/>
        <Route path="/settings" component={Settings}/>
      </Route>

    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Router>
);
