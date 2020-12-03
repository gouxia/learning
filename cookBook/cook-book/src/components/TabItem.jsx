import React, { Component } from 'react';
import '../assets/styles/TabItem.scss'
class TabItem extends Component {
    render() { 
        return ( 
            <div className="wd-tab-item">
                <div className="wd-tab-item-icon-wrapper">
                    <div className="tabItemIcon">国内机票</div>
                    <div className="tabItemIcon"></div>
                </div>

            </div>
         );
    }
}
 
export default TabItem;