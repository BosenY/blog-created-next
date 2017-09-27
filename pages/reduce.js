import { Provider } from 'mobx-react'
import store from '../store'

import React from 'react'
import Reduce from '../components/Reduce'
import Router from 'next/router'

export default class reduce extends React.Component {
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
      <Reduce></Reduce>
        <button onClick={() => Router.push('/add')}>go to add</button>
      </div>

      </Provider>
    )
  }
}
