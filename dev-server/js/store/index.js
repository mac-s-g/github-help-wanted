import {
    applyMiddleware,
    compose,
    createStore
} from 'redux'

import Reducer from './../../../src/js/reducers'
import Middleware, { history } from './../../../src/js/store/middleware'
import DevTools from './../containers/DevTools';

const enhancer = compose(
  applyMiddleware(
    //production middleware
    ...Middleware
    //development middleware
  ),
  DevTools.instrument()
);

export default function configureStore(initial_state) {
  return createStore(
    Reducer(history),
    initial_state,
    enhancer
  );
};

export { history }
