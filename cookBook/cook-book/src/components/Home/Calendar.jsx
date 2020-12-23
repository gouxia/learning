import React, { Component } from 'react';
import '../../assets/styles/Calendar.scss'
import Header from '../../components/Home/Header'
import ZHD from '../../untils/CNCalendar'
const lunar = new ZHD();
class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pulldown: true,
            pageName: "",
            toPath: "",
            setType: "",
            config: {
                display: 13 //显示几个月
            },
            orgDate: "",
            dstDate: "",
            week: [
                { zh: "日", en: "SUN" },
                { zh: "一", en: "MON" },
                { zh: "二", en: "TUE" },
                { zh: "三", en: "WED" },
                { zh: "四", en: "THU" },
                { zh: "五", en: "FRI" },
                { zh: "六", en: "SAT" }
            ],
            // 寻访一整个月的天数
            monthDetail: [],
            todayTimeStamp: "",
            Stamp: "",
            holidays: {
                "2018-1-1": "元旦",
                "2018-2-15": "除夕",
                "2018-4-5": "清明",
                "2018-5-1": "劳动",
                "2018-5-4": "青年",
                "2018-6-18": "端午",
                "2018-9-24": "中秋",
                "2018-10-1": "国庆",
                "2018-12-25": "圣诞",
                "2019-1-1": "元旦",
                "2019-2-4": "除夕",
                "2019-4-5": "清明",
                "2019-5-1": "劳动",
                "2019-5-4": "青年",
                "2019-6-7": "端午",
                "2019-9-13": "中秋",
                "2019-10-1": "国庆",
                "2019-12-25": "圣诞"
            },
            priceInfos: [
                {
                    day: '2020-12-21',
                    price: '1'
                },
                {
                    day: '2020-12-22',
                    price: '2'
                },
                {
                    day: '2020-12-23',
                    price: '3'
                },
                {
                    day: '2020-12-24',
                    price: '4'
                },
                {
                    day: '2020-12-25',
                    price: '5'
                },
                {
                    day: '2020-12-26',
                    price: '6'
                },
                {
                    day: '2020-12-27',
                    price: '7'
                }
            ],
            //低价日历显示多少天
            priceNum: 90,
            // orgDst: 'org',
            tripType: "",
            index: 0

        }
    }
    hide = () => {
        this.props.toogleCalendar()
    }
    componentDidMount() {
        // 获取今天的时间戳
        this.state.todayTimeStamp = this.getTimeStamp(new Date());
        //获得明天日期
        let tomorrow = this.getTomorrowDay(new Date());
        this.state.orgDate = this.getTimeStamp(tomorrow);
        this.init()
    }
    getPrice(day, stamp) {
        let lowPriceDay = this.getPriceDay(new Date(), this.state.priceNum);
        let lowPriceStamp = this.getTimeStamp(lowPriceDay);
        if (day) {
            let price = "";
            if (this.state.todayTimeStamp <= stamp) {
                price = "¥--";
            }
            if (stamp >= lowPriceStamp) {
                price = "";
                return;
            }
            let arr = day.split("-");
            arr[1] = arr[1] >= 10 ? arr[1] : "0" + arr[1];
            arr[2] = arr[2] >= 10 ? arr[2] : "0" + arr[2];
            day = arr.join("-");
            if (this.state.priceInfos.length === 0) {
                price = "";
                return;
            }
            for (var i = 0; i < this.state.priceInfos.length; i++) {
                // 如果priceInfos数组中的day和日历的day一样时，则显示priceInfos中的价格
                if (this.state.priceInfos[i].day === day) {
                    if (this.state.priceInfos[i].price !== "-") {
                        price = "¥" + this.state.priceInfos[i].price;

                    }
                }
            }
            return price;
        }
    }

    //li 样式
    getliClass(timeStamp) {
        let type = "";
        // 选择日期为去程
        if (this.props.orgDst === "org") {
            // 小于今天的日期样式
            if (this.state.todayTimeStamp > timeStamp) {
                type = "disabled childItem";
            } else {
                // 大于今天的日期样式
                type = "canBeSelected childItem";
            }
        } else {
            //选择日期为回程
            // 小于去程的日期样式
            if (this.state.orgDate > timeStamp) {
                type = "disabled childItem";
            } else {
                type = "canBeSelected childItem";
            }
        }

        return type;
    }
    //日期样式
    getDayClass(timeStamp) {
        let type = "";
        if (timeStamp < this.state.todayTimeStamp) {
            return;
        }
        //选择日期为去程
        if (this.props.orgDst === "org") {
            //返程时间为空,去程日期样式
            if (timeStamp === this.state.Stamp && this.state.dstDate === "") {
                type = "orgChooseDate";
            }
            //返程时间不为为空,去程日期、回程日期样式
            if (timeStamp === this.state.orgDate && this.state.dstDate !== "") {
                type = "dstChooseDate";
            }
            if (timeStamp === this.state.dstDate && this.state.dstDate !== "") {
                type = "dstChooseDate";
            }
        } else {
            //选择日期为返程
            //去程日期、回程日期样式
            if (timeStamp === this.state.orgDate || timeStamp === this.state.dstDate) {
                type = "dstChooseDate";
            }
            //回程日期小于去程日期
            if (this.state.dstDate < this.state.orgDate) {
                return;
            }
        }
        return type;
    }
    /***
     * 选择并设置日期，存储所选日期的时间戳和yy-mm-dd
     */
    setDate(d, t) {
        console.log(this.props)
        //校验是否可选
        if (this.todayTimeStamp > t) return;
        if (!d) return;
        let dateArr = d.split("-");
        let dateStr =
            (dateArr[1].length < 2 ? "0" + dateArr[1] : dateArr[1]) +
            "月" +
            (dateArr[2].length < 2 ? "0" + dateArr[2] : dateArr[2]) +
            "日";

        // 首先判断当前是否为多程，多程的日期存储与往返和单程不同
        // 首先判断当前是否为多程，多程的日期存储与往返和单程不同
        if (this.state.tripType === "MT") {
            let setMTDate = {
                date: dateStr,
                timeStamp: t,
                index: this.state.index
            }
        } else {
            //当前选择的类型为单程或者往返
            if (this.props.orgDst === "org") {
                let setOrgDate = {
                    date: dateStr,
                    timeStamp: t
                }
                this.setState({
                    orgDate: setOrgDate.timeStamp
                })
            } else {
                if (t < this.state.orgDate) {
                    alert("返程日期不能小于去程日期")
                } else {
                    this.setState({
                        dstDate: t
                    })
                    let setDstDate = []
                    setDstDate.push({
                        date: dateStr,
                        timeStamp: t
                    })
                }
            }
        }
        this.setDay(d, t);
        this.hide();

    }
    init() {
        //获取当前年
        let currentYear = new Date().getFullYear();

        //获取当前月
        let currentMonth = new Date().getMonth() + 1;

        //获取当前日
        let currentDay = new Date().getDate();
        //生成数组year,month用于判断某月有多少天
        let monthCount = this.state.config.display;
        let monthStr = [];
        let monthShort = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
        ];
        // 判断一年有几个月
        for (let i = 0; i < monthCount; i++) {
            let obj = {};
            if (currentMonth + i >= 13) {
                obj.year = Math.floor(currentYear + (currentMonth + i) / 12);
                obj.month = (currentMonth + i) % 12;
            } else {
                obj.year = currentYear;
                obj.month = currentMonth + i;
            }
            obj.short = monthShort[obj.month - 1];
            monthStr.push(obj);
        }
        this.createCalendar(monthStr, currentDay);
    }
    /**
     * 根据要显示的年份和月份，
     * 拼接所有月精确到日的可遍历的字符串
     **/
    createCalendar(monthStr, currentDay) {
        //定义
        let detailStr = [];
        //循环要显示的几个月的每一个月，默认第一个月是当月
        for (let i = 0; i < monthStr.length; i++) {
            let obj = {};
            let detailTopMonth =
                monthStr[i].month >= 10 ? monthStr[i].month : "0" + monthStr[i].month;
            obj.detailTop = monthStr[i].year + "年" + detailTopMonth + "月";
            obj.detailStr = [];
            //首先判断每个月有多少天，需要传入year,month
            let getMonthNum = this.getDaysOfMonth(
                monthStr[i].year,
                monthStr[i].month - 1
            );
            let startDaysNum = this.getWeekForDay(
                monthStr[i].year + "/" + monthStr[i].month + "/" + "1"
            );
            let endDaysNum =
                Math.ceil((getMonthNum + startDaysNum) / 7) * 7 -
                (getMonthNum + startDaysNum);
            for (let m = 0; m < startDaysNum; m++) {
                let childObj = {};
                childObj.val = " ";
                obj.detailStr.push(childObj);
            }

            for (let n = 1; n <= getMonthNum; n++) {
                let childObj = {};
                childObj.val = n;
                childObj.timeStamp =
                    Date.parse(
                        new Date(monthStr[i].year + "/" + monthStr[i].month + "/" + n)
                    ) / 1000;
                childObj.dateStr = monthStr[i].year + "-" + monthStr[i].month + "-" + n;
                // 获取农历日期
                childObj.lunarDay = lunar.GetLunarDay(
                    monthStr[i].year,
                    monthStr[i].month,
                    n
                );
                obj.detailStr.push(childObj);
            }
            for (let q = 0; q < endDaysNum; q++) {
                let childObj = {};
                childObj.val = " ";
                obj.detailStr.push(childObj);
            }
            detailStr.push(obj);
        }
        // 去掉不可选的日期的整行(周)
        let firstStr = detailStr[0].detailStr;
        let deleteNum = ""; //删除数量
        let maxNum = detailStr[12].detailStr.length;
        for (let strIn = 0; strIn < firstStr.length; strIn++) {
            if (firstStr[strIn].timeStamp === this.state.todayTimeStamp) {
                let num = strIn + 1;
                if (num % 7 === 0) {
                    deleteNum = num - 7;
                } else {
                    deleteNum = num - num % 7;
                }
            }
        }
        detailStr[0].detailStr.splice(0, deleteNum);
        detailStr[12].detailStr.splice(deleteNum, maxNum);
        // console.log(detailStr);
        this.setState({
            monthDetail: detailStr
        })
    }
    //判断是否为闰年
    isLeap(year) {
        return year % 100 === 0
            ? (year % 400 === 0 ? 1 : 0)
            : (year % 4 === 0 ? 1 : 0);
    }

    //获取每月有多少天，并拼接为一个数组
    getDaysOfMonth(year, mon) {
        let mDays = [
            31,
            28 + this.isLeap(year),
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ];
        return mDays[mon];
    }

    //计算处理月第一天是星期几
    getWeekForDay(day) {
        //  getTime() 返回 1970 年 1 月 1 日至今的毫秒数。
        let localTime = new Date(day).getTime();
        // getTimezoneOffset()返回本地时间与格林威治标准时间 (GMT) 的分钟差。
        let localOffset = new Date(day).getTimezoneOffset() * 60000;
        let utc = localTime + localOffset;
        let offset = 8; let korean = 0;
        korean = utc + (3600000 * offset);
        // getDay()从 Date 对象返回一个月中的某一天 (1 ~ 31)。
        return new Date(korean).getDay();
    }

    //获取时间戳
    getTimeStamp(day) {
        var getTodayDate =
            day.getFullYear() + "/" + (day.getMonth() + 1) + "/" + day.getDate();
        return Date.parse(new Date(getTodayDate)) / 1000;
    }
    // 获取第二天时间
    getTomorrowDay(day) {
        day.setTime(day.getTime() + 24 * 60 * 60 * 1000);
        return day;
    }
    // 获取九十天后时间
    getPriceDay(day, num) {
        // let orgday = new Date("2018-03-10");
        day.setTime(day.getTime() + num * 24 * 60 * 60 * 1000);
        return day;
    }
    setDay(day, tamp) {
        if (tamp < this.state.orgDate) return;
        if (!day) return;
        this.setState({
            Stamp: tamp
        })
        let arr = day.split("-");
        if (arr[1] < 10) arr[1] = "0" + arr[1];
        if (arr[2] < 10) arr[2] = "0" + arr[2];
        day = arr.join("-");
        let weekNum = this.getWeekForDay(day);
        let weekZh = this.state.week[weekNum].zh;
        let data = {
            weekZh,
            day
        }
        this.props.resive(data)
        return weekZh
    }

    render() {
        const { visible } = this.props;
        return visible ? (
            <div className="calendarWrap">
                <Header
                    left={
                        <div
                            className="WhiteBackIcon"
                            onClick={this.hide}>
                        </div>
                    }
                    center={
                        <div className="jt-canlendarHead-warp">日期选择</div>
                    }
                />
                {/* 日历控件主体 */}
                <div className="weeks is-fixed">
                    <ul className="is-fixed">
                        {
                            this.state.week.map((item, index) => (
                                <li key={index}>
                                    <div className="week-en">{item.en}</div>
                                    <div className="week-zh">{item.zh}</div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="monthWrap">
                    {
                        this.state.monthDetail.map((item, index) => (
                            <div className="monthItemwrap" key={index}>
                                <div className="monthItemHead">
                                    <div className="monthItemHeadContent">
                                        {item.detailTop}
                                    </div>
                                </div>
                                <div className="monthTable">
                                    <ul>
                                        {
                                            item.detailStr.map((childItem, index) => (
                                                <li key={index} className={this.getliClass(childItem.timeStamp)} onClick={() => this.setDate(childItem.dateStr, childItem.timeStamp)}>
                                                    <div className="dateItem">
                                                        <div className="otherday" className={this.getDayClass(childItem.timeStamp)}>
                                                            {this.state.todayTimeStamp === childItem.timeStamp ? <span className="today">今</span> : <span>{childItem.val}</span>}
                                                        </div>
                                                        {/* {
                                                            childItem.timeStamp === this.state.orgDate ? <span className="orgDay">
                                                            </span> : ''
                                                        }
                                                        {
                                                            childItem.timeStamp === this.state.dstDate ? <span className="dstDays">
                                                            </span> : ''
                                                        } */}
                                                    </div>
                                                    {/* <!-- 价格 --> */}
                                                    <div className="lowPrice" key={index}>
                                                        {this.getPrice(childItem.dateStr, childItem.timeStamp)}
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        ) : null;
    }
}

export default Calendar;