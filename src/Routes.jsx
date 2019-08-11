import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';

import Dashboard from './components/dashboard/Dashboard';
import Messages from './components/messages/Messages';
import Audience from './components/audience/Audience';
import Campaign from './components/campaign/Campaign';

const Routes = () => (
  <div>
    <Header />
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/campaign" component={Campaign} />
    <Route exact path="/messages" component={Messages} />
    <Route exact path="/audience" component={Audience} />
  </div>
    )

export default Routes