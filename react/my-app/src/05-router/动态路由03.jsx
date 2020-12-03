// 动态路由的嵌套
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>Home</div>
    )
}
const Rendering = () => {
    return (
        <div>Rendering</div>
    )
}
const Components = () => {
    return (
        <div>Components</div>
    )
}
const PropsState = () => {
    return (
        <div>PropsState</div>
    )
}
const Topics = (props) => {
    console.log(props)
    return (
        <div>
            <Router>
            <h1>Topics</h1>
            <hr></hr>
            <ul>
                <li><Link to="/Topics/Rendering">Rendering</Link></li>
                <li><Link to="/Topics/Components">Components</Link></li>
                <li><Link to="/Topics/PropsState">PropsState</Link></li>
            </ul>
            <Route path="/Topics/Rendering" component={Rendering}></Route>
            <Route path="/Topics/Components" component={Components}></Route>
            <Route path="/Topics/PropsState" component={PropsState}></Route>
            </Router>
        </div>
    )
}

class App extends Component {
    render() { 
        return ( 
            <div>
                <Router>
                    <ul>
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/Topics">Topics</Link></li>
                    </ul>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/Topics" component={Topics}></Route>
                </Router>
            </div>
         );
    }
}
 
export default App;