import {
    applyMiddleware,
    createStore
} from 'redux'

import Reducer from './../reducers'
import Middleware from './middleware'


export default function configureStore(initial_state) {
  return createStore(
    Reducer,
    initial_state,
    applyMiddleware(...Middleware)
  );
};