import React, { Component } from 'react';
import '../../assets/styles/HomeAnnouncement.scss'
import Marquee from './Marquee'
class HomeAnnouncement extends Component {
    render() {
        return (
            <div className="home-notification-wrap">
                <div className="home-notification">
                    <i></i>
                    <Marquee>
                    </Marquee>
                </div>
                <div style={{height:'0.413rem'}}></div>
            </div>
        );
    }
}

export default HomeAnnouncement;