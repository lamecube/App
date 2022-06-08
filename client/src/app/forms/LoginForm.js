import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginHandler} from '../../store/api/api.romanjordan.com/auth';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  LoginForm.propTypes = {
    loginHandler: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  const {errors} = props.auth || null;
  const [user, setUser] = useState({});
  const [fetching, setFetching] = useState(false);

  const email = user.email ? user.email : '';
  const password = user.password ? user.password : '';

  const change = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    props.auth.errors = null;
    setFetching(true);
    props.loginHandler(user);
  };

  // Turn Fetching state off
  errors && fetching && setFetching(false);
  return (
    <div id="loginForm">
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        {errors &&
          errors.auth &&
          <p className="error">{errors.auth}</p>}
        <div>
          <input
            onChange={change}
            name="email"
            placeholder="email"
            value={email}
            type="text"
          />
          {errors &&
          errors.email &&
          <p className="error">{errors.email}</p>}
        </div>
        <div>
          <input
            onChange={change}
            name="password"
            placeholder="Password"
            value={password}
            type="password"
          />
          {!!errors &&
          errors.password &&
          <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" >
          {fetching ?
            <Loader type="ThreeDots" color="#00BFFF" height={20} width={20} /> :
            'Submit'
          }
        </button>
      </form>
      {errors &&
          errors.network &&
          <p className="error">{errors.network}</p>}
      <a href="/help">Need help Signing in?</a>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(
    mapStateToProps,
    {loginHandler},
)(LoginForm);
