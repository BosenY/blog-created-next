import {Provider} from 'mobx-react'
import {initStore} from '../store'
import Router from 'next/router'
import React from 'react'
import Reduce from '../components/Reduce'

export default class add extends React.Component {
    static getInitialProps({req}) {
        const isServer = !!req
        const store = initStore(isServer)
        return {count: store.count, isServer}
    }

    constructor(props) {
        super(props)
        this.store = initStore(props.isServer, props.count)
    }

    render() {
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
