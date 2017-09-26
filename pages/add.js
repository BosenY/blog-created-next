import { Provider } from 'mobx-react'
import { initStore } from '../store'
import React from 'react'
import Add from '../components/Add'
import Router from 'next/router'

export default class add extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { count: store.count, isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer, props.count)
  }

  render () {
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
