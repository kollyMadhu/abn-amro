import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducer from "./app/reducers/index";
import { Provider } from "react-redux";
const storeCommom = createStore(allReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={storeCommom}>
    <App />
  </Provider>,
  document.getElementById('root')
);