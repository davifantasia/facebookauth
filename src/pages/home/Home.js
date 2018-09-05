import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Home.css';
import Login from '../../components/Login';

class Home extends Component {
  render() {
    return Object.keys(this.props.userReducer.user).length ?
      (<Redirect to="/user" />) :
      (
        <div className="page home">
          <Login />
        </div>
      );
  }
}

Home.propTypes = {
  userReducer: PropTypes.object
};

const mapStateToProps = state => ({
  userReducer: state.userReducer
});

export default connect(mapStateToProps)(Home);
