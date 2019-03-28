import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import logger from 'redux-logger'
 
// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    f=>f
  )
);

export default store;