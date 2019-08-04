import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import Component1 from './components/component1/component1';
import Component2 from './components/component2/component2';

const Routes = () => (
  <div>
    <Header />
    <Route exact path="/Component1" component={Component1} />
    <Route exact path="/Component2" component={Component2} />
  </div>
    )

export default Routes