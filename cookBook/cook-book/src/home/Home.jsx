import React, { Component } from 'react';
import '../assets/styles/Home.scss'
import TabPage from '../components/TabPage'
import Scroll from '../components/Scroll'
//import TabBar from '../components/TabBar'
import HomeHeader from '../components/HomeHeader'
import HomeBanner from '../components/HomeBanner'
import HomeAnnouncement from '../components/HomeAnnouncement'
import NarBar from '../components/NavBar'
import TabItem from '../components/TabItem'
import Button from '../components/Button'
import QuickEnteryslide from '../components/QuickEnteryslide'
import Recommended from '../components/Recommended'
export default class Home extends Component {
    render() {
        return (
            <div>
                <TabPage>
                    <div className="home">
                        <Scroll className="wrapper scrollView">
                            <div className="home-content">
                                {/* 首页顶部Header */}
                                <HomeHeader></HomeHeader>
                                <section className="home-body">
                                    {/* Banner */}
                                    <HomeBanner></HomeBanner>
                                    {/* 新闻公告 */}
                                    <HomeAnnouncement></HomeAnnouncement>
                                    <div className="flightSearchWrap">
                                        {/* navbar选项卡 */}
                                        <NarBar>
                                            <TabItem>
                                                <span style={{fontSize:'.38rem'}}>国内机票</span>
                                            </TabItem>
                                            <TabItem>
                                                <span style={{fontSize:'.38rem'}}>国际/地区机票</span>
                                            </TabItem>
                                        </NarBar>
                                        <div className="orgDstWrap">
                                            <div className="orgCity">
                                                北京大兴
                                        </div>
                                            <div className="changeOrgDst">
                                                <div className="changeIcon"></div>
                                            </div>
                                            <div className="dstCity">
                                                上海虹桥
                                        </div>
                                        </div>
                                        <div className="flightDateWrap">
                                            <div className="flightOrgDatewrap">
                                                <div className="flightDay">04</div>
                                                <div className="flightDateInfo">
                                                    <p>周五</p>
                                                    <p>2020-12-04</p>
                                                </div>
                                            </div>
                                            <div
                                                className="flightDstDatewrap">
                                                <span className="dstDay">返程日期</span>
                                            </div>
                                        </div>
                                        <div className="SearchBtnWrap">
                                            <div className="flightSearchBtn">
                                                <Button></Button>
                                            </div>
                                            <div className="go-special-booking">
                                                <span >伤残军人/警察购票入口</span>
                                            </div>
                                        </div>
                                    </div>
                                    <QuickEnteryslide></QuickEnteryslide>
                                    <Recommended></Recommended>
                                </section>
                            </div >
                        </Scroll>
                    </div >
                </TabPage>
            </div >
        )
    }
}