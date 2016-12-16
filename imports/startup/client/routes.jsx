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

export const renderRoutes = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={LandingPage} />

      <Route path="dashboard" component={DashboardPage}>
        <IndexRoute component={Dashboard} />
      </Route>

      <Route path="project" component={ProjectPage}>
        <IndexRoute component={Workspace} />
      </Route>

    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Router>
);
