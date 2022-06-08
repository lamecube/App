import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginHandler} from '../../../util/axiosWithAuth';

const NewEvent = (props) => {
  const [user, setUser] = useState({});
  const username = user.username ? user.username : '';
  const password = user.password ? user.password : '';
  const secret = user.secret ? user.secret : '';

  const change = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.loginHandler(user);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={change}
        name="username"
        placeholder="Username"
        value={username}
        type="text"
      />
      <input
        onChange={change}
        name="password"
        placeholder="Password"
        value={password}
        type="password"
      />
      {props.encrypt && (
        <input onChange={change} type="password" name="secret" value={secret} />
      )}
      <input type="submit" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.loggedIn,
  };
};

export default connect(mapStateToProps, {loginHandler})(NewEvent);
