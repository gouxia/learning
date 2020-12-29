import React, { Component } from 'react';
import '../../assets/styles/AirportList.scss';
import Header from '../Home/Header';
import Scroll from '../../components/Home/Scroll'

class AirportList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      // list: "",
      targetLetter: "",
      searchList: [], //搜索结果
      hotList: [],
      // letterList: {},
      tabCur: "domestic",
      simple: true,
      historyList: []
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
  componentDidMount = () => {
    //console.log('this.curInCityData----', this.curInCityData);
  }
  // 以下为机场组件的方法
  // react中的计算属性用get，并要有返回值return，当要使用计算属性就要用this.hasStarCity
  get hasStarCity() {
    //是否包含热门城市
    return this.props.starCity && this.props.starCity.length > 0;
  }
  // 得到国内城市重新拍的顺序
  get curCityData() {
    const letterobj = this.props.cityData.domestic.reduce((result, airportItem) => {
      const { headerChar } = airportItem;
      if (result[headerChar]) {
        result[headerChar].push(airportItem)
      } else {
        result[headerChar] = [airportItem];
      }
      return result;
    }, {})
    let result = [];
    for (let letter in letterobj) {
      result.push({
        letter,
        airports: letterobj[letter]
      })
    }
    //console.log(result)
    // 比较字母
    return result.sort((a, b) => {
      if (a.letter < b.letter) {
        return -1;
      }
      if (a.letter > b.letter) {
        return 1;
      }

      return 0;
    })
  }
  // 得到国外城市重新拍的顺序
  get curInCityData() {
    const letterobj = this.props.cityData.international.reduce((result, airportItem) => {
      const { headerChar } = airportItem;
      if (result[headerChar]) {
        result[headerChar].push(airportItem)
      } else {
        result[headerChar] = [airportItem];
      }
      return result;
    }, {})
    let result = [];
    for (let letter in letterobj) {
      result.push({
        letter,
        airports: letterobj[letter]
      })
    }
    //console.log(result)
    // 比较字母
    return result.sort((a, b) => {
      if (a.letter < b.letter) {
        return -1;
      }
      if (a.letter > b.letter) {
        return 1;
      }

      return 0;
    })
  }
  get hasHistory() {
    return this.props.historyCity && this.props.historyCity.length > 0;
  }
  // 点击城市
  _chooseOne = (cityItem) => {
    const storage = window.localStorage;
     storage.setItem("airportName",JSON.stringify([cityItem]))
      //第三种方法读取
      const airportName=storage.getItem("airportName");
      JSON.parse(airportName)
    // console.log(airportName)
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
          {/* 右侧字母搜索指引 */}
          {
            this.state.tabCur === 'domestic' && this.state.input === '' ?
              <div className="jetair-widget-citys-letnav">
                <ol>
                  <div>
                    <li>
                      <em className='star-small'></em>
                    </li>
                    {this.curCityData.map((item, inx) => (
                      <li key={inx}>
                        {item.letter}
                      </li>

                    ))}
                  </div>
                </ol >
              </div> :
              null
          }

          {/* 城市列表 */}
          <Scroll>
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
                                {this.state.historyList}
                              </li>
                            </ul>
                          </dd>
                          <dt className="jetair-widget-star-header">热门</dt>
                          <dd className="jetair-widget-history-star-warp" style={{ borderBottom: '.013333rem dashed #8a8989' }}>
                            <ul className="jetair-widget-star-warp">
                              {this.props.starCity.map((item, idx) => (
                                <li key={idx} onClick={() => this._chooseOne(item.airportName)}>
                                  {item.airportName}
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </div> :
                        null
                    }
                    {/* <!-- 机场列表 --> */}
                    {
                      this.state.tabCur === 'domestic' ?
                        <div>
                          {this.curCityData.map((item, inx) => (
                            <div key={inx}>
                              <dt className="city-list-header">
                                {item.letter}
                              </dt>
                              {item.airports.map((cityItem, cityItemIndex) => (
                                <div key={cityItemIndex} onClick={() => this._chooseOne(cityItem)}>
                                  <dd>
                                    {cityItem.airportName}
                                  </dd>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                        :
                        <div className="jetair-widget-citys-list-internation">
                          {this.curInCityData.map((item, inx) => (
                            <div key={inx}>
                              <dt className="city-list-header">
                                {item.letter}
                              </dt>
                              {item.airports.map((cityItem, cityItemIndex) => (
                                <div key={cityItemIndex} onClick={() => this._chooseOne(cityItem)}>
                                  <dd>
                                    {cityItem.airportName}
                                    <span>({cityItem.countryName})</span>
                                  </dd>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                    }
                  </dl>
                </div>
              </div>
            </div>
          </Scroll>
        </div>
      </div >
    ) : null;
  }
}

export default AirportList;