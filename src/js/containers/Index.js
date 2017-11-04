import React from 'react'
import Layout from './../components/layout/Main'
import {Provider} from 'react-redux'
import Store from './../reducers'

export default class extends React.Component {

  render() {
    const {state} = this
    return (
      <Provider store={Store}>
        <Layout />
      </Provider>)
  }

}
