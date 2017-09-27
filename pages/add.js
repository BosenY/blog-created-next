import { Provider } from 'mobx-react'
import store from '../store'

import React from 'react'
import Add from '../components/Add'
import Router from 'next/router'

export default class add extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    // const store = initStore(isServer)
    return store
  }

  constructor (props) {
    super(props)
    console.log(props)
    console.log(111)
    console.log( store)
    this.store = store
  }

  render () {
      console.log(store)
    return (
      <Provider store={this.store}>
      <div>
      <Add></Add>
        <button onClick={() => Router.push('/reduce')}>go to reduce</button>
      </div>

      </Provider>
    )
  }
}
