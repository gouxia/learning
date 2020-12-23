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
import Calendar from '../../components/Home/Calendar'
import AirportList from '../../components/Home/AirportList'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTabId: "domestic",
            orgCity: "北京大兴",
            dstCity: "上海虹桥",
            orgStyle: "wd-tab-item active navbar-active navbar-tab-item tab-normal-font-size",
            dstStyle: "wd-tab-item navbar-tab-item tab-normal-font-size",
            changeIconStyle: "changeIcon",
            // 是否显示日历组件
            isShow: false,
            flightDateInfo: {
                org: {
                    week: "", //周几
                    day: "", //整个时间
                    date: "" //日
                },
                dst: {
                    week: "", //周几
                    day: "", //整个时间
                    date: "" //日
                }
            },
            dstDateUp: "",
            clearDate: false,
            orgDst: "org",
            // 是否显示机场列表组件
            isDisplay:false

        }
    }
    /** 航班选择出发日期 */
    flightOrgDay() {
        return (this.state.flightDateInfo && this.state.flightDateInfo.org && this.state.flightDateInfo.org.day) || "";
    }
    /** 航班选择到达日期 */
    flightDstDay() {
        return (this.state.flightDateInfo && this.state.flightDateInfo.dst && this.state.flightDateInfo.dst.day) || "";
    }

    componentDidMount() {
        this.getflightDateInfo()
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
        if (this.state.changeIconStyle === "changeIcon") {
            this.setState({
                orgCity: this.state.dstCity,
                dstCity: this.state.orgCity,
                changeIconStyle: "changeAnimation changeIcon"
            })
        } else {
            this.setState({
                orgCity: this.state.dstCity,
                dstCity: this.state.orgCity,
                changeIconStyle: "changeIcon"
            })
        }

    }
    getDay(day, type) {
        let year = day.getFullYear();
        let weekDay = ["日", "一", "二", "三", "四", "五", "六"];
        let week = weekDay[day.getDay()];
        let month =
            day.getMonth() + 1 >= 10
                ? day.getMonth() + 1
                : "0" + (day.getMonth() + 1);
        let date = day.getDate() >= 10 ? day.getDate() : "0" + day.getDate();
        let tomorrow = year + "-" + month + "-" + date;
        if (type === "dst") {
            this.setState({
                dstDateUp: tomorrow
            })
        }
        let orgTomorrow = this.state.flightDateInfo
        orgTomorrow.org.week = week;
        orgTomorrow.org.date = day.getDate();
        orgTomorrow.org.day = tomorrow
        this.setState({
            orgTomorrow
        })
    }
    /**
    * 得到明天日期
    */
    getflightDateInfo() {
        // 单程时间默认明天
        let orgday = new Date();
        orgday.setTime(orgday.getTime() + 24 * 60 * 60 * 1000);
        let getOrgdayDate = `${orgday.getFullYear()}/${orgday.getMonth() + 1}/${orgday.getDate()}`;
        let getOrgdayStamp = Date.parse(new Date(getOrgdayDate)) / 1000;
        //处理默认出发，到达日期
        this.getDay(orgday, "org");
        let setOrgDate = {
            date: this.flightOrgDay,
            timeStamp: getOrgdayStamp
        }
        return setOrgDate;
    }
    // 设置日历组件显示和隐藏状态
    toogleCalendar = (type) => {
        this.setState({
            orgDst: type,
            isShow: !this.state.isShow
        })
    }
    // 设置机场列表组件显示和隐藏状态
    toggleAirportList = () => {
        this.setState({
            isDisplay: !this.state.isDisplay
        })

    }
    /**
     * 清除返程日期
     */
    deleteDstDay = () => {
        let clearDst = this.state.flightDateInfo.dst
        clearDst.week = ""
        clearDst.date = ""
        clearDst.day = ""
        this.setState({
            clearDst
        })
        console.log(this.state.flightDateInfo.dst)
        this.setState({
            clearDate: true
        })
    }
    resive(data) {
        console.log(data)
        let type = this.state.orgDst;
        if (type === "dst") {
            this.setState({
                clearDate: false
            })
        } else {
            if (
                this.flightDstDay && data.day > this.flightDstDay
            ) {
                let orgDay = new Date(data.day);
                orgDay.setTime(orgDay.getTime() + 24 * 60 * 60 * 1000);
                this.getDay(orgDay, "dst");
            }
        }
        // 在React中经常会使用到setState,因为在react生态中,state就是一切.
        // 在开发过程中,时长会在state中遇到一些比较复杂的数据结构,类似与构造函数中的state中的flightDateInfo对象，想要更改flightDateInfo对象中的
        // org中的week，date，day中的值有三种方式：作用于对象中的深层级和第一层级；作用对象中的第一层级；作用于对象中的深层级和第一层级。下面是作用于对象中的深层级和第一层级这种方式
        if (this.state.orgDst === 'org') {
            let orgTime = this.state.flightDateInfo
            orgTime.org.week = data.weekZh
            orgTime.org.date = new Date(data.day).getDate()
            orgTime.org.day = data.day
            this.setState({
                orgTime
            })
        } else {
            let dstTime = this.state.flightDateInfo
            dstTime.dst.week = data.weekZh
            dstTime.dst.date = new Date(data.day).getDate()
            dstTime.dst.day = data.day
            this.setState({
                dstTime
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
                                            <div className="orgCity" onClick={this.toggleAirportList}>
                                                {this.state.orgCity}
                                            </div>
                                            <div className="changeOrgDst" onClick={this.changeOrgCityDstCity}>
                                                <div className={this.state.changeIconStyle}></div>
                                            </div>
                                            <div className="dstCity" onClick={this.toggleAirportList}>
                                                {this.state.dstCity}
                                            </div>
                                        </div>
                                        <div className="flightDateWrap">
                                            <div className="flightOrgDatewrap" onClick={() => this.toogleCalendar('org')}>
                                                <div className="flightDay">{this.state.flightDateInfo.org.date}</div>
                                                <div className="flightDateInfo">
                                                    <p>周{this.state.flightDateInfo.org.week}</p>
                                                    <p>{this.state.flightDateInfo.org.day}</p>
                                                </div>
                                            </div>
                                            {
                                                this.state.flightDateInfo.dst.day !== '' ?
                                                    <div className="flightDstDatewrap">
                                                        <div className="dateWrap" onClick={() => this.toogleCalendar('dst')}>
                                                            <div className="flightDay">
                                                                {this.state.flightDateInfo.dst.date}
                                                            </div>
                                                            <div className="flightDateInfo">
                                                                <p>周{this.state.flightDateInfo.dst.week}</p>
                                                                <p>{this.state.flightDateInfo.dst.day}</p>
                                                            </div>
                                                        </div>
                                                        <div className="deleteday" onClick={this.deleteDstDay}>
                                                        </div>
                                                    </div> :
                                                    <div className="flightDstDatewrap">
                                                        <span className="dstDay" onClick={() => this.toogleCalendar('dst')}>
                                                            返程日期
                                                        </span>
                                                    </div>
                                            }
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
                </TabPage >
                {/* 价格日历 */}
                < Calendar
                    visible={this.state.isShow}
                    toogleCalendar={isShow => this.toogleCalendar(isShow)}
                    resive={(data) => this.resive(data)}
                    orgDst={this.state.orgDst}
                />
                {/* 机场列表 */}
                <AirportList
                    found={this.state.isDisplay}
                    toggleAirportList={isDisplay => this.toggleAirportList(isDisplay)}
                />
            </div >
        )
    }
}