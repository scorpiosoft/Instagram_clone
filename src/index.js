import React from 'react';
import ReactDOM from 'react-dom';
import { firebase } from './lib/firebase';

// Initialize Firebase
firebase.analytics();

ReactDOM.render(
  <h1>Hello, World</h1>,
  document.getElementById('root')
);
