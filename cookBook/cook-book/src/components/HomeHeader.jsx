import React, { Component } from 'react';
import '../assets/styles/HomeHeader.scss'
class HomeHeader extends Component {
    render() {
        return (
            <div>
                <div className="home-header-warpper">
                    <div className="login-nav">
                        <div className="user-login-icon">
                            
                        </div>
                        <div className="user-login-text">
                            <p>登录/注册</p>
                        </div>
                        <div className="IconMask">
                            <img src=""></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;