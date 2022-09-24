import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const PrivaterRoute = ({ component: Component, ...rest }) => {
  PrivaterRoute.propTypes = {
    component: PropTypes.func.isRequired,
  };
  return (<Routes>
    <Route
      {...rest}
      render={() => {
        return <Component />;
      }} /> </Routes>
  );
};

export default PrivaterRoute;
