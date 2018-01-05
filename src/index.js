import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers';
import Register from './components/register';
import Login from './components/login';
import Organization from './components/organization';
import UpdateOrganization from './components/updateOrganization';
import Home from './components/home';
import RegisterOrganizationWithStripe from './components/organization_stripe';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/organization/update" component={UpdateOrganization} />
          <Route path="/organization/stripe" component={RegisterOrganizationWithStripe} />
          <Route path="/organization" component={Organization} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
