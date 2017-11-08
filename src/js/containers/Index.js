import React from 'react'
import Layout from './../components/layout/Main'
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'
import '/react/src/style/scss/global.scss'

export default ({store}) => (
  <Provider store={store}>
    <Layout />
  </Provider>
)

