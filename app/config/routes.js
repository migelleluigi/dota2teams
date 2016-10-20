import React from 'react';
import Main from '../components/Main';
import TeamsSection from '../Teams/TeamsSection';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={TeamsSection}/>
	<Route path="teams" component={TeamsSection}/>
  </Route>
);