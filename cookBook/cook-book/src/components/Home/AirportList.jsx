import React, { Component } from 'react';
import '../../assets/styles/AirportList.scss';
import Header from '../Home/Header';
import gg from '../Home/gg.json'
class AirportList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            // list: "",
            targetLetter: "",
            searchList: [], //搜索结果
            hotList: [],
            letterList: {},
            tabCur: "domestic",
            hotList: [
                {
                    airportName:'上海浦东'
                },
                {
                    airportName:'北京大兴'
                },
                {
                    airportName:'上海虹桥'
                },
                {
                    airportName:'昆明'
                },
                {
                    airportName:'咸阳国际机场'
                },
                {
                    airportName:'南京'
                },
                {
                    airportName:'成都'
                },
                {
                    airportName:'天河国际机场'
                },
                {
                    airportName:'青岛机场'
                },
                {
                    airportName:'广州白云'
                },
                {
                    airportName:'兰州'
                },
                {
                    airportName:'烟台'
                },
                {
                    airportName:'宁波'
                },
                {
                    airportName:'太原武宿机场'
                },
                {
                    airportName:'鄂尔多斯'
                }
            ],

        }
    }
    hide = () => {
        this.props.toggleAirportList()
    }
    bindClickTab = (type) => {
        if (type === 'domestic') {
            this.setState({
                tabCur: 'domestic'
            })
        } else {
            this.setState({
                tabCur: 'international'
            })
        }
    }
    render() {
        const { found } = this.props;
        return found ? (
            <div>
                <div className="jetair-widget-citys">
                    {/* 头部信息 */}
                    <Header
                        left={
                            <div
                                className="WhiteBackIcon"
                                onClick={this.hide}>
                            </div>
                        }
                        center={
                            <div className="jt-cityHead-input-warp">
                                <input className="jt-cityHead-input" placeholder={"北京 / beijing / bj / PKX"} />
                                <i className="jt-cityHead-search-icon"></i>
                                <i className="jt-cityHead-searchClear-icon" onClick={this.clearInput}>
                                </i>
                            </div>
                        }
                    />
                    {/* 选项卡 */}
                    <div className="jetair-widget-tabWarp">
                        <div className="jetair-widget-citys-tabItemWrap">
                            <div className={this.state.tabCur === 'domestic' ? 'jetair-widget-citys-tabItem tabCur' : 'jetair-widget-citys-tabItem'} onClick={() => this.bindClickTab('domestic')}>
                                国内城市
                            </div>
                            <div className={this.state.tabCur === 'international' ? 'jetair-widget-citys-tabItem tabCur' : 'jetair-widget-citys-tabItem'} onClick={() => this.bindClickTab('international')}>
                                国际城市/港澳台
                            </div>
                        </div>
                    </div>
                    {/* 城市列表 */}
                    <div className="jetair-widget-citys-content">
                        <div className="airport-list-warp">
                            <div className="jetair-widget-citys-list">
                                <dl>
                                    {/* <!-- 历史/热门 --> */}
                                    {
                                        this.state.tabCur === 'domestic' ?
                                            <div>
                                                <dt className="jetair-widget-unique-header">
                                                    历史
                                                </dt>
                                                <dd className="jetair-widget-history-star-warp">
                                                    <ul className="jetair-widget-history-warp">
                                                        <li>
                                                        </li>
                                                    </ul>
                                                </dd>
                                                <dt className="jetair-widget-star-header">
                                                    热门
                                                </dt>
                                                <dd className="jetair-widget-history-star-warp" style={{borderBottom: '.013333rem dashed #8a8989'}}>
                                                    <ul className="jetair-widget-star-warp">
                                                        {this.state.hotList.map((item, index) => (
                                                            <li key={index}>
                                                                {item.airportName}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </dd>
                                            </div>:
                                            null
                                    }
                                    {/* <!-- 机场列表 --> */}
                                    <div>
                                        <dt>

                                        </dt>

                                        <div>
                                            <dd>
                                                <div>
                                                    <span >

                                                    </span>
                                                    <span>

                                                    </span>
                                                </div>
                                            </dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        ) : null;
    }
}

export default AirportList;