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
import queryAirportData from '../../components/Home/airportList.json'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTabId: "domestic",
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
            isDisplay: false,
            airportListProps: {
                orgDst: "org",
                orgCity: '北京大兴',
                dstCity: '上海虹桥',
                cityData: { domestic: [], international: [], airports: [] },
                starCity: [],
                historyCity: []
            }

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
        // 将机场列表组件的数据保存在state中的airportListProps中
        //console.log(queryAirportData)
        let airportDate = this.state.airportListProps
        airportDate.cityData.domestic = queryAirportData.airportBOCNs
        airportDate.cityData.international = queryAirportData.airportBOABs
        airportDate.cityData.airports = queryAirportData.airports
        this.setState({
            airportDate
        })
        //console.log(this.state.airportListProps)
        let airportHot = this.state.airportListProps
        airportHot.starCity = queryAirportData.hotAirports
        this.setState({
            airportHot
        })
        this._formatCityList(this.state.airportListProps.cityData);
    }
    _formatCityList(arr, type) {
        return arr;
    }
    tabItemClickHandler = (selectedTabId) => {
        // 判断index
        if (selectedTabId === "domestic") {
            let domesticCity = this.state.airportListProps
            domesticCity.orgCity = "北京大兴";
            domesticCity.dstCity = "上海虹桥";
            this.setState({
                domesticCity,
                orgStyle: "wd-tab-item active navbar-active navbar-tab-item tab-normal-font-size",
                dstStyle: "wd-tab-item navbar-tab-item tab-normal-font-size"
            });
        } else {
            let internationalCity = this.state.airportListProps
            internationalCity.orgCity = "福冈";
            internationalCity.dstCity = "烟台";
            this.setState({
                internationalCity,
                orgStyle: "wd-tab-item navbar-tab-item tab-normal-font-size",
                dstStyle: "wd-tab-item active navbar-active navbar-tab-item tab-normal-font-size"
            });
        }
    }
    changeOrgCityDstCity = () => {
        if (this.state.changeIconStyle === "changeIcon") {
            this.setState({
                orgCity: this.state.airportListProps.dstCity,
                dstCity: this.state.airportListProps.orgCity,
                changeIconStyle: "changeAnimation changeIcon"
            })
        } else {
            this.setState({
                orgCity: this.state.airportListProps.dstCity,
                dstCity: this.state.airportListProps.orgCity,
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
    toggleAirportList = (type) => {
        this.state.airportListProps.orgDst = type
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
    // 以下是机场列表的方法
    onChoose = (cityItem) => {
        console.log(cityItem)
        if (this.state.airportListProps.orgDst === 'org') {
            let selectCity = this.state.airportListProps
            selectCity.orgCity = cityItem.airportName;
            this.setState({
                selectCity
            })
        } else {
            let selectCity = this.state.airportListProps
            selectCity.dstCity = cityItem.airportName;
            this.setState({
                selectCity
            })
        }
        // 将点击的历史机场存在本地的localStorage中
        const storage = window.localStorage;
        // 当你为点击机场时，通过storage.getItem()拿到的是一个空数组，只有点击机场才会通过unshift()方法将你点击的机场放进数组中
        let historylist = storage.getItem("historylist") || [];
        // 此时输出的为一个空数组
        //console.log(historylist)
        // 判断historylist类型，如果为string类型则将historylist转化为数组类型
        typeof historylist === 'string' && (historylist = JSON.parse(historylist));
        // 向localStorage数组中添加点击的机场（也就是保存数据），unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        historylist.unshift(cityItem)
        // es5 hash去重法
        //historylist = unique(historylist);
        // 限制4个记录
        if (historylist.length > 4) {
            historylist.pop(cityItem)
        }
        // 利用JSON.stringify()将存入的数据转换成字符串
        storage.setItem("historylist", JSON.stringify(historylist))
        let historyAirport = this.state.airportListProps
        historyAirport.historyCity = historylist;
        this.setState({
            historyAirport
        })

        //console.log(this.state.airportListProps.historyCity)
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
                                                <span data-index="domestic" onClick={()=> this.tabItemClickHandler('domestic')} className={this.state.orgStyle} style={{ fontSize: '.38rem' }}>国内机票</span>
                                            </TabItem>
                                            <TabItem>
                                                <span data-index="international" onClick={()=> this.tabItemClickHandler('international')} className={this.state.dstStyle} style={{ fontSize: '.38rem' }}>国际/地区机票</span>
                                            </TabItem>
                                        </NarBar>
                                        <div className="orgDstWrap">
                                            <div className="orgCity" onClick={() => this.toggleAirportList('org')}>
                                                {this.state.airportListProps.orgCity}
                                            </div>
                                            <div className="changeOrgDst" onClick={this.changeOrgCityDstCity}>
                                                <div className={this.state.changeIconStyle}></div>
                                            </div>
                                            <div className="dstCity" onClick={() => this.toggleAirportList('dst')}>
                                                {this.state.airportListProps.dstCity}
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
                    cityData={this.state.airportListProps.cityData}
                    starCity={this.state.airportListProps.starCity}
                    onChoose={(cityItem) => this.onChoose(cityItem)}
                    historyCity={this.state.airportListProps.historyCity}
                />
            </div >
        )
    }
}