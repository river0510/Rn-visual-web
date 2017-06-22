import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './index.css';
import {Provider} from 'react-redux';
import Reducers from './src/reducers/index'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import {bindActionCreators} from 'redux'

const logger = createLogger();
var reducer = combineReducers(Reducers);
const store = createStore(
  reducer,
  applyMiddleware(logger)
);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
