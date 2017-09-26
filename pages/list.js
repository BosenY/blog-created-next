import Router from 'next/router'
import Header from '../components/Header'
export default() => (
    <div>
    <Header></Header>
        <button onClick={() => Router.push('/about')}>about page</button>
        <button onClick={() => Router.push('/')}>index page</button>
    </div>
)