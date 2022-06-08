import React from 'react';
import Header from './header';
import UserList from './templates/UsersList';

const PrivateMainView = () =>{
  // console.log('here');
  return (
    <>
      <Header/>
      <UserList />
    </>
  );
};

export default PrivateMainView;


