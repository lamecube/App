import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logOut} from '../../../store/api/api.romanjordan.com/auth';
import PropTypes from 'prop-types';
const Header = (props) => {
  Header.propTypes = {
    logOut: PropTypes.func.isRequired,
  };
  return (
    <header>
      <h2>Welcome Back</h2>
      <nav>
        <Link to="/" onClick={props.logOut}>
          Logout
        </Link>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.loggedIn,
  };
};

export default connect(mapStateToProps, {logOut})(Header);
