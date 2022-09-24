import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from '../util/PrivateRoute';
import PublicMainView from './public';
import PrivateMainView from './private';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import NavDrawer from '../components/navigation/NavDrawer';
import Dialog from '../components/modal/Modal';


const App = (props) => {
  App.propTypes = {
    auth: PropTypes.object.isRequired,
    component: PropTypes.element,
  };
  // console.log('yup', props);
  const {loggedIn} = props.auth || false;

  return (
    <div className="App">
      <NavDrawer />
      {loggedIn ? (
        <Routes>
          <PrivateRoute path="/" element={<PrivateMainView />} />
        </Routes>
      ) : (
        // <div>yo</div>
        <Routes>
          <Route match path="/" element={<PublicMainView {...props} />} />
        </Routes>
      )}
      <Dialog />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {})(App);
