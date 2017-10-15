
import { combineReducers } from 'redux'

import nav from './navReducer';

const appReducer = combineReducers({
  nav,
  details:require('./details').reducer,
});

export default appReducer;