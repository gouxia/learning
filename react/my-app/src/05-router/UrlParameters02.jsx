import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// const Child = (props) => {
//     return (
//         <div>child</div>
//     )
// }
class Child extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
    componentDidMount() {
        console.log(this)
    }
}

class UrlParameters extends Component {
    render() { 
        return ( 
            <div>
                <Router>
                    <Link to="/aaa">aaa</Link>
                    <Link to="/bbb">bbb</Link>
                    <Link to="/ccc">ccc</Link>
                    <Route path="/:id" component={Child}></Route>
                </Router>
            </div>
         );
    }
}
 
export default UrlParameters;