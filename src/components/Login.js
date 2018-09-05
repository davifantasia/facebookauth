import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../actions-creators/userAction';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
  render() {
    return <FacebookLogin
      appId="2144744199074882"
      autoLoad={false}
      fields="name,email,picture"
      callback={this.onResponseFacebook}
    />;
  }

  onResponseFacebook = (response) => {
    this.props.onResponseFacebook({...response});
  };
}

Login.propTypes = {
  onResponseFacebook: PropTypes.func
};

export default connect(
  undefined, 
  { onResponseFacebook: userAction }
)(Login);
