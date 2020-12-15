import React, { Component } from 'react';
import '../../assets/styles/TabBar.scss'
class TabBar extends Component {
    render() {
        return (
            <div className="wd-tabbar"
                style={{ position: "fixed", zIndex: 10, left: 0, right: 0, bottom: 0, margin: "auto" }}>
                {this.props.children}
            </div>
        );
    }
}

export default TabBar;