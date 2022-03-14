import React from 'react';
import Routes from './routes';
import {UserContextProvider} from './hooks';

export default function index() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}
