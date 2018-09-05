import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../../actions-creators/userAction';
import { logout } from '../../utils/login';
import './Auth.css';

class Auth extends Component {
  render() {
    return (
      <div className="auth">
        {Object.keys(this.props.userReducer.user).length ? (
          <button className="auth__button" onClick={this.onLogoutClick}>
            Sign Out
          </button>
        ) : (
          <p className="auth__text">You are not logged in.</p>
        )}
      </div>
    );
  }

  onLogoutClick = () => {
    logout().then(() => {
      this.props.onLogoutClick({});
    });
  };
}

Auth.propTypes = {
  userReducer: PropTypes.object,
  onLogoutClick: PropTypes.func
};

const mapStateToProps = state => ({
  userReducer: state.userReducer
});

export default connect(
  mapStateToProps, 
  { onLogoutClick: userAction }
)(Auth);
