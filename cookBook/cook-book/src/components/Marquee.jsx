import React, { Component } from 'react';
import '../assets/styles/Marquee.scss'
class Marquee extends Component {
    render() {
        return (
            <div className="marquee-wrapper">
                <div className="home-notification-text">
                    <p>关于赴福州旅客的出行防疫提示</p>
                </div>
            </div>
        );
    }
}

export default Marquee;