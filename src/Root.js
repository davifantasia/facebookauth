import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Home from './pages/home/Home';
import User from './pages/user/User';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Auth />
        <Route exact path='/' component={Home} />
        <Route exact path='/user' component={User} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object
};

export default Root;
