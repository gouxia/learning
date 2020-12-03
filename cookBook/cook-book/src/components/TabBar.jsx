import React, { Component } from 'react';
import '../assets/styles/TabBar.scss'
class NavItem extends Component {
    render() { 
        return ( 
            <div className="tabitem">
                {/* 底部的导航按钮 */}
                <div className="wd-tabbar">
                    <div className="wd-tab-item">
                        <div className="wd-tab-item-icon-1">
                        </div>
                        <div className="wd-tab-item-name">首页</div>
                    </div>
                    <div className="wd-tab-item">
                        <div className="wd-tab-item-icon-2">
                        </div>
                        <div className="wd-tab-item-name">订单</div>
                    </div>
                    <div className="wd-tab-item">
                        <div className="wd-tab-item-icon-3">
                        </div>
                        <div className="wd-tab-item-name">旅客须知</div>
                    </div>
                    <div className="wd-tab-item">
                        <div className="wd-tab-item-icon-4">
                        </div>
                        <div className="wd-tab-item-name">我</div>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default NavItem;