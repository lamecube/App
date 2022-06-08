import React from 'react';
// import {Switch, Link, Route} from 'react-router-dom';
import {useMediaQuery} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';

// import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import PrintIcon from '@mui/icons-material/Print';
import MessageIcon from '@mui/icons-material/Message';
// import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PropTypes from 'prop-types';

const PublicMainView = (props) => {
  PublicMainView.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  };

  // const anchor = true;
  const style = {
    header: {
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      flexDirection: useMediaQuery('(min-width: 500px)') ? 'row' : 'column',
      alignItems: 'center',
    },
    icons: {
      display: 'flex',
      flexDirection: useMediaQuery('(min-width: 500px)') ? 'column' : 'row',
      padding: '50px',
    },
  };
  // console.log('Romans', props);
  return (
    <div color='transparent' style={{...style.header}}>
      <div style={{...style.icons}}>
        <IconButton style={{margin: '15px'}}>
          <MessageIcon sx={{fontSize: 40}} />
        </IconButton>
        <IconButton style={{margin: '15px'}}>
          <ThreeDRotationIcon sx={{fontSize: 40}} />
        </IconButton>
        <IconButton style={{margin: '15px'}}>
          <PsychologyIcon sx={{fontSize: 40}} />
        </IconButton>
      </div>
      <Avatar
        src='https://avatars.githubusercontent.com/u/17465565?s=400&u=c474bf6aaa3026794ca6017faa6422b3ed42baf2&v=4'
        alt='Roman and his puppy Zuzu'
        sx={{width: 200, height: 200, margin: 0, padding: 0}}
      />
      <div style={{...style.icons}}>
        <IconButton style={{margin: '15px'}}>
          <GitHubIcon sx={{fontSize: 40}} />
        </IconButton>
        <IconButton style={{margin: '15px'}}>
          <LinkedInIcon sx={{fontSize: 40}} />
        </IconButton>
        <IconButton style={{margin: '15px'}}>
          <PrintIcon sx={{fontSize: 40}} />
        </IconButton>
      </div>
    </div>);
};

export default PublicMainView;
