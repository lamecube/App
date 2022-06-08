import React from 'react';
import {connect} from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
import PropTypes from 'prop-types';
import {toggleModal} from '../../store/modal/actions';

const Modal = (props) => {
  Modal.propTypes = {
    display: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
  };
  const {toggleModal, display} = props;

  return (
    <Dialog open={display} onClose={toggleModal}>
      <DialogTitle>Send Mea a message</DialogTitle>
      <DialogContent>YOYOYO</DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.modal,
  };
};

export default connect(mapStateToProps, {toggleModal})(Modal);
