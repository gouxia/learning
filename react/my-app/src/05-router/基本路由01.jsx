import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>Home</div>
    )
}
const About = () => {
    return (
        <div>About</div>
    )
}
const DashBord = () => {
    return (
        <div>DashBord</div>
    )
}
class App extends Component {
    render() { 
        return ( 
            <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashbord">DashBord</Link>
                    </li>
                </ul>
                {/* 关于Route的exact,加上exact代表当前路由path的路径采用精确匹配，
                比如说Home的path如果不加上exact,那么path="/about"将会匹配他自己与path="/“这两个，
                所以一般path=”/"这个路由一般会加上exact */}
               <Route path="/" exact component={Home}></Route>
               <Route path="/about" component={About}></Route>
               <Route path="/dashbord" component={DashBord}></Route>
            </Router>
            </div>
         );
    }
}
 
export default App;