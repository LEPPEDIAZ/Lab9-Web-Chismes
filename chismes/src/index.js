import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore';
import UserApp from './components/UserApp';
//Add the connection with backend
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import notes from "./reducers";

const store = configureStore();

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => {
      dispatch(notes.fetchNotes());
    },
  }
}

ReactDOM.render(
  <Provider store={store}>
    <UserApp />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
