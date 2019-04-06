/*------------------------------------------------------------------
IMPORTANT: the production build does not use this entrypoint


changes made to this file should be duplicated to `/src/js/entry.js`
if they are intended to affect the production build
------------------------------------------------------------------*/

"use strict"

//promise polyfill for fetch api
import 'babel-polyfill'

//import React & ReactDOM for browser rendering
import React from 'react'
import {render} from "react-dom"

import Index from './../../src/js/containers/'
import configureStore from './store'
import DevTools from './containers/DevTools'

const Store = configureStore()

render(
  <Index store={Store} />,
  document.getElementById('app-container')
)

render(
  <DevTools store={Store} />,
  document.getElementById('react-devtools-root')
)