import React, { Component } from 'react';
import '../../assets/styles/Home.scss'
import TabPage from '../../components/Home/TabPage'
import Scroll from '../../components/Home/Scroll'
import HomeHeader from '../../components/Home/HomeHeader'
import HomeBanner from '../../components/Home/HomeBanner'
import HomeAnnouncement from '../../components/Home/HomeAnnouncement'
import NarBar from '../../components/Home/NavBar'
import TabItem from '../../components/Home/TabItem'
import Button from '../../components/Home/Button'
import QuickEnteryslide from '../../components/Home/QuickEnteryslide'
import Recommended from '../../components/Home/Recommended'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //selectedTabId: "domestic",
            orgCity: "北京大兴",
            dstCity: "上海虹桥",
            orgStyle: "wd-tab-item active navbar-active navbar-tab-item tab-normal-font-size",
            dstStyle: "wd-tab-item navbar-tab-item tab-normal-font-size",
            changeIconStyle:"changeIcon"
        }
    }
    tabItemClickHandler = (e) => {
        console.log(e.target.dataset.index);
        let index = e.target.dataset.index;
        // 此时控制台能输出点击按钮获取到的类Tab
        console.log(this);
        // 判断index
        if (index === "domestic") {
            // 通过setState()修改state的值
            this.setState({
                orgCity: "北京大兴",
                dstCity: "上海虹桥",
                orgStyle: "wd-tab-item active navbar-active navbar-tab-item tab-normal-font-size",
                dstStyle: "wd-tab-item navbar-tab-item tab-normal-font-size"
            });
        } else {
            this.setState({
                orgCity: "福冈",
                dstCity: "烟台",
                orgStyle: "wd-tab-item navbar-tab-item tab-normal-font-size",
                dstStyle: "wd-tab-item active navbar-active navbar-tab-item tab-normal-font-size"
            });
        }
    }
    changeOrgCityDstCity = () => {
        if(this.state.changeIconStyle === "changeIcon") {
            this.setState({
                orgCity: this.state.dstCity,
                dstCity: this.state.orgCity,
                changeIconStyle: "changeAnimation changeIcon"
            })
        }else{
            this.setState({
                orgCity: this.state.dstCity,
                dstCity: this.state.orgCity,
                changeIconStyle: "changeIcon"
            })
        }

    }
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
                                                <span data-index="domestic" onClick={this.tabItemClickHandler} className={this.state.orgStyle} style={{ fontSize: '.38rem' }}>国内机票</span>
                                            </TabItem>
                                            <TabItem>
                                                <span data-index="international" onClick={this.tabItemClickHandler} className={this.state.dstStyle} style={{ fontSize: '.38rem' }}>国际/地区机票</span>
                                            </TabItem>
                                        </NarBar>
                                        <div className="orgDstWrap">
                                            <div className="orgCity">
                                                {this.state.orgCity}
                                        </div>
                                            <div className="changeOrgDst" onClick={this.changeOrgCityDstCity}>
                                                <div className={this.state.changeIconStyle}></div>
                                            </div>
                                            <div className="dstCity">
                                                {this.state.dstCity}
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