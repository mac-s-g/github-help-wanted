import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Layout from './../components/layout/Main'

import 'semantic-ui-css/semantic.min.css'
import '../../style/scss/global.scss'

export default ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)
