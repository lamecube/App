import React from 'react';
import RegisterForm from '../../forms/RegisterForm';
import LoginForm from '../../forms/LoginForm';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
// import {getNasa} from '../../../store/actions/api/nasa';

const Body = (props) => {
  return (
    <div id="mainBody" >
      <Switch>
        <Routes>
          <Route path="/register" render={() => <RegisterForm {...props} />} />
          <Route path="/sign-in" render={() => <LoginForm {...props} />} />
        </Routes>
        <AvailableRoutes {...props} />
      </Switch>
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
  // {getNasa},
)(Body);

export const AvailableRoutes = (props) => {
  return (<>
    <Routes>
      <Route path="/register" render={() => <RegisterForm {...props} />} />
      <Route path="/cat" render={() => <RegisterForm {...props} />} />
      <Route path="/dog" render={() => <RegisterForm {...props} />} />
    </Routes>
  </>
  );
};

