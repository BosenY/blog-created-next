import Link from 'next/link'
// import Router from 'next/router'
import React from 'react'
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            linkStyle : {
                marginRight: 15
            }
        }
    }

    render() {
        let { linkStyle } = this.state
        return (
            <div>
                <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
            </div>
        )
    }
}