import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './User.css';

const User = (props) => {
  if (Object.keys(props.userReducer.user).length) {
    const { name, email, picture } = props.userReducer.user;
    const imageStyle = {
      height: picture.data.height,
      width: picture.data.width
    };

    return (
      <div className="page user">
        <img src={picture.data.url} alt="" style={imageStyle} />
        <div className="user__texts">
          <p className="user__text">{name}</p>
          <p className="user__text">{email}</p>
        </div>
      </div>
    );
  }
  
  return <Redirect to="/" />;
};

User.propTypes = {
  userReducer: PropTypes.object
};

const mapStateToProps = state => ({
  userReducer: state.userReducer
});

export default connect(mapStateToProps)(User);
