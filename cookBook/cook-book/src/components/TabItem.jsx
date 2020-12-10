import React, { Component } from 'react';
import '../assets/styles/TabItem.scss'
class TabItem extends Component {
    render() {
        return (
            <div className="wd-tab-item navbar-tab-item tab-normal-font-size" style={{flex: '1 1 0%',
            flexDirection: 'row'}}>
                <div className="wd-tab-item-icon-wrapper">
                    <div className="tabItemIcon">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default TabItem;