import React from 'react'
import Header from './Header'
import Router from 'next/router'
const goHome = () => {
    Router.push({
        pathname: '/'
    })
}
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layoutStyle: {
                margin: 20,
                padding: 20,
                border: '1px solid #DDD'
            }
        }
    }
    render() {
        let {layoutStyle} = this.state
        return (
            <div style={layoutStyle}>
                <Header/>
                {this.props.children}
                <button onClick={() => goHome()}>go home</button>
            </div>
        )
    }
}