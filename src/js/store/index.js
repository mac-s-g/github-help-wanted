import {
    applyMiddleware,
    createStore
} from 'redux'

import Reducer from './../reducers'
import Middleware, { history } from './middleware'


export default function configureStore(initial_state) {
  return createStore(
    Reducer(history),
    initial_state,
    applyMiddleware(...Middleware)
  );
};

export { history }
