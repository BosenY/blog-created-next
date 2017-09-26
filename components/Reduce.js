import React from 'react'
import {observer, inject} from "mobx-react"
@inject('store')
@observer
export default class Reduce extends React.Component {
    constructor(props) {
        super(props)
    }
    addCount() {
        this.props.store.AddCount()
    }
    reduceCount() {
        this.props.store.ReduceCount()
    }
    render() {
        let { count } = this.props.store
        return (
          <div>
          count: {count}
          <button onClick={() => this.addCount()}>+</button>
          <button onClick={() => this.reduceCount()}>-</button>
          </div>
        )
    }
}