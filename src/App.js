import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Router from './Router';
import reducers from './reducers';

export default class App extends Component {
  componentDidMount() {
  const config = {
     apiKey: "AIzaSyCafc-bsxSIrF0CT1YiEfseFNMHfg6k1MQ",
     authDomain: "left-you-somethin.firebaseapp.com",
     databaseURL: "https://left-you-somethin.firebaseio.com",
     storageBucket: "left-you-somethin.appspot.com",
     messagingSenderId: "273359995006"
   };
   firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
