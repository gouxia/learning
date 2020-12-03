import React, { Component } from 'react';
import '../assets/styles/Home.scss'
import TabBar from '../components/TabBar'
import HomeHeader from '../components/HomeHeader'
import HomeBanner from '../components/HomeBanner'
import HomeAnnouncement from '../components/HomeAnnouncement'
import NarBar from '../components/NavBar'
import TabItem from '../components/TabItem'
export default class Home extends Component {
    render() {
        return (
            <div>
                <main className="content">
                    <div className="home">
                        <div className="home-content">
                            <HomeHeader></HomeHeader>
                            <section className="home-body">
                                <HomeBanner></HomeBanner>
                                <HomeAnnouncement></HomeAnnouncement>
                                <div className="flightSearchWrap">
                                    <div className="orgDstWrap">
                                        <div className="orgCity">
                                            福冈
                                        </div>
                                        <div className="changeOrgDst">
                                            <div className="changeIcon"></div>
                                        </div>
                                        <div className="dstCity">
                                            烟台
                                        </div>
                                    </div>
                                </div>
                                
                               
                            </section>
                        </div>
                    </div>
                </main>
                <TabBar></TabBar>
            </div>
        )
    }
}