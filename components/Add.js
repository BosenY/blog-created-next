import React from 'react'
import {observer, inject} from "mobx-react"
@inject('store')
@observer
export default class Add extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)
    }
    addCount() {
        this.props.store.CountStore.AddCount()
    }
    reduceCount() {
        this.props.store.CountStore.ReduceCount()
    }
    render() {
        let { count } = this.props.store.CountStore
        return (
          <div>
          count: {count}
          <button onClick={() => this.addCount()}>+</button>
          <button onClick={() => this.reduceCount()}>-</button>
          </div>
        )
    }
}