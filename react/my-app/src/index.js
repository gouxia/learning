// react的状态提升
import React from "react";
import ReactDOM, { render } from "react-dom";
//import App from './05-router/App.jsx'
import App from './05-router/动态路由03'
class ParentCom extends React.Component {
    render() {
        return (
            <div>
                <App></App>
            </div>
        )
    }
}

ReactDOM.render(<ParentCom />, document.getElementById("root"));
