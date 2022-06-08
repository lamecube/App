import React, {useState} from 'react';
import {connect} from 'react-redux';


const RegisterForm = (props) => {
  const [user, setUser] = useState({});
  const email = user.email ? user.email : '';
  const password = user.password ? user.password : '';

  const change = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // user.email
    // && user.password
    // && props.loginHandler(user,props);
  };

  return (
    <div id="registerForm">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={change}
          name="email"
          placeholder="email"
          value={email}
          type="text"
        />
        <input
          onChange={change}
          name="password"
          placeholder="Password"
          value={password}
          type="password"
        />

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.loggedIn,
  };
};

export default connect(mapStateToProps, null)(RegisterForm);

