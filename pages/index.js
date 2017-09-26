import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import Header from '../components/Header'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

// import '../style/index.css'
const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)
export default class extends React.Component {
    static async getInitialProps() {
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
        const data = await res.json()

        console.log(`Show data fetched. Count: ${data.length}`)

        return {shows: data}
    }
    constructor(props) {
        super(props)
    }
    goToList() {
        Router.push({
            pathname: '/list',
            query: {
                name: 'axx'
            }
        })
    }
    render() {
        // let {props} = this
        return (
            <Layout>
                <h1>My Blog</h1>

                <h1>Batman TV Shows</h1>
                <ul>
                    {this
                        .props
                        .shows
                        .map(({show}) => (
                            <li key={show.id}>
                                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                                    <a>{show.name}</a>
                                </Link>
                            </li>
                        ))}
                </ul>
                <style jsx>
                    {
                        ` h1,
                        a {
                            font-family: "Arial";
                        }

                        ul {
                            padding: 0;
                        }

                        li {
                            list-style: none;
                            margin: 5px 0;
                        }

                        a {
                            text-decoration: none;
                            color: blue;
                        }
                        a:hover {
                            opacity: 0.6;
                        }
                         `
                    }</style>
            </Layout>
        )
    }
}