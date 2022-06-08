import React from 'react';
import {connect} from 'react-redux';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PropTypes from 'prop-types';
import {toggleNav} from '../../store/NavDrawer/actions';

const NavDrawer = (props) => {
  NavDrawer.propTypes = {
    navDrawer: PropTypes.bool.isRequired,
    toggleNav: PropTypes.func.isRequired,
  };
  const {toggleNav, navDrawer} = props;
  // console.log('yo', props);
  return (
    <SwipeableDrawer open={navDrawer} onOpen={()=>[]} onClose={toggleNav}>
      yoyoyo
    </SwipeableDrawer>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.nav,
  };
};

export default connect(mapStateToProps, {toggleNav})(NavDrawer);
