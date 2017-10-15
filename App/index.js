import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React, {Component} from 'react';

import configureStore from './store';
import rootReducer from 'app/reducers';
import AppWithNavigationState from 'app/navigator/index.js';

var store = configureStore();

export default class Root extends Component {
  render() {
    console.log(this.props);
    return (
      <Provider store={store}>
        <AppWithNavigationState {...this.props}/>
      </Provider>
    );
  }
}