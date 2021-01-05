import React, { Component } from 'react';
import '../../assets/styles/AirportList.scss';
import Header from '../Home/Header';
import Scroll from '../../components/Home/Scroll'
// import { TimeSelect } from 'element-react';
import Card from '../../components/Home/Card'
class AirportList extends Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 tabselect 的 DOM 元素
    this.tabselect = React.createRef();
    this.state = {
      input: "",
      // list: "",
      targetLetter: "",
      searchList: [], //搜索结果
      hotList: [],
      // letterList: {},
      tabCur: "domestic",
      simple: true
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
    // console.log('this.curCityData----', this.curCityData);
    this._scrollView();
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
    console.log('this.curCityData----', this.curCityData);
    // 调用父组件的onChoose方法并传入参数
    this.props.onChoose(cityItem)
    this.hide();
  }
  /**
       * 输入城市查询
       */
  inputSearch = () => {
    let reg = new RegExp(
      this.state.input === "" || this.state.input === null || this.state.input === undefined
        ? "xxyy"
        : this.state.input,
      "ig"
    );
    let _arr = [];
    let searchList = this.props.cityData.domestic.concat(
      this.props.cityData.international || []
    );
    console.log(searchList)
    searchList.forEach((item) => {
      if (
        item.airportName.search(reg) !== -1 ||
        item.code.search(reg) !== -1 ||
        item.pinyin.search(reg) !== -1 ||
        item.pinyinHead.search(reg) !== -1
      ) {
        _arr.push(item);
      }
    });
    this.setState({
      searchList: _arr
    })
    console.log(this.state.searchList)
  }
  clearInput = () => {
    this.setState({
      input: ''
    })
  }
  // input输入框onChange绑定事件，监听input标签中的变化
  inputChangeHandler = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  // 侧边导航栏
  //  targetLetter() {
  //   this._scrollView();
  // }
  /**
     * 点击字母
     */
  _chooseLetter = (e, symbol) => {
    if (symbol === "starCity") {
      this.setState({
        targetLetter: "starCity/history"
      }, () => {
        this._scrollView()
      })
    } else {
      this.setState({
        targetLetter: e
      }, () => {
        this._scrollView()
      })
    }
  }
  /**
     * touch slide letters list
     * 计算每个字母含有的机场列表高度
     */
  _touchLetters = (e) => {
    //console.log(e)
    e.preventDefault();
    // 获取标签ol
    let ol = document.querySelector(".jetair-widget-citys-letnav ol");
    // 获取li标签的数量也就是字母的个数
    let liNum = document.querySelectorAll(".jetair-widget-citys-letnav li")
      .length;
    // clientHeight网页可见区域高度，也就是所有字母的高度
    let olHei = ol.clientHeight; //ol height
    // 单个字母的高度
    let liHei = Math.round(olHei / liNum); //li height
    let olTop = ol.offsetTop + ol.offsetParent.offsetTop;
    let olBot = olTop + olHei;
    let touchY = e.touches[0].pageY;

    //取最后一个header
    let dtElList = Array.prototype.slice.call(
      document.querySelectorAll(
        ".jetair-widget-citys-list [class^='city-list-header']"
      )
    );
    let lastDtEl = dtElList[dtElList.length - 1];
    switch (e.type) {
      case "touchstart":
        if (touchY < olTop) {
          // 回顶
          this.tabselect.current.scrollTo(0, 0);
        } else if (touchY > olBot) {
          // 到底
          this.tabselect.current.scrollToElement(lastDtEl, 300);
        }
        break;

      case "touchmove":
        if (touchY < olBot && touchY > olTop) {
          let olTouchY = touchY - olTop;
          let targetIndex = Math.ceil(olTouchY / liHei);
          let target = document.querySelectorAll(
            ".jetair-widget-citys-letnav li"
          )[targetIndex - 1];

          if (target.getAttribute("data-type") === "starCity/history") {
            this.setState({
              targetLetter: 'starCity/history'
            })
          } else {
            this.setState({
              targetLetter: target.innerText
            })
          }
        } else if (touchY <= olTop) {
          // 回顶
          this.tabselect.current.scrollTo(0, 0);
        } else {
          // 到底
          this.tabselect.current.scrollToElement(lastDtEl, 300);

        }
        break;
      // 一些代码约定要求所有switch语句都有一个default案例，即使默认情况下是空的，下面代码必须要有，不然会报错：Expected a default case
      default:
    }
    this._scrollView()
  }
  /**
   * 滚动可视区 - Triggered by '_chooseLetter'
   */
  _scrollView = () => {
    //console.log(this.tabselect)
    let dtList = document.querySelectorAll(".jetair-widget-citys-list dt");
    //_this = this,
    let _dtList = Array.prototype.slice.call(dtList);

    if (_dtList) {
      //----------better scroll----------
      let wrapper = document.querySelector(".jetair-widget-citys-content");

      this.state.targetLetter === "starCity/history" &&
        this.tabselect.current.scrollToElement(wrapper, 300);
      //遍历城市列表
      _dtList.forEach((value, index, array) => {
        if (value.innerText === this.state.targetLetter) {
          this.tabselect.current.scrollToElement(value, 300);
          return false;
        }
      });
    }
  }
  checkButton = () => {
    if (this.state.tabCur === 'domestic') {
      if (this.state.input === '') {
        return (
          <div>
            {
              this.props.historyCity.length>0 ?
              <div>
              <dt className="jetair-widget-unique-header">
                历史
            </dt>
              <dd className="jetair-widget-history-star-warp">
                <ul className="jetair-widget-history-warp">
                  {this.props.historyCity.map((historyItem, historyItemIndex) => (
                    <li key={historyItemIndex} onClick={() => this._chooseOne(historyItem)}>
                      {historyItem.airportName}
                    </li>
                  ))
                  }
                </ul>
              </dd>
            </div>:
            null
            }
            <div>
              <dt className="jetair-widget-star-header">热门</dt>
              <dd className="jetair-widget-history-star-warp" style={{ borderBottom: '.013333rem dashed #8a8989' }}>
                <ul className="jetair-widget-star-warp">
                  {this.props.starCity.map((item, idx) => (
                    <li key={idx} onClick={() => this._chooseOne(item)}>
                      {item.airportName}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            {/* <!-- 国内机场列表 --> */}
            <div>
              {this.curCityData.map((item, inx) => (
                <div key={inx}>
                  <dt className={"city-list-header" + inx}>
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
          </div>

        )

      } else {
        // 模糊查询
        if (this.state.searchList.length > 0) {
          return (
            <div className="jetair-widget-citys-searchlist">
              <div>
                <ul>
                  {this.state.searchList.map((searchItem, searchIteminx) => (
                    <li key={searchIteminx} onClick={() => this._chooseOne(searchItem)}>
                      {searchItem.airportName}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        } else {
          return (
            <div className="jetair-widget-citys-searchlist">
            <div
              className="nomatch">
              没有匹配城市
            </div>
            </div>
          )
        }
      }
    } else {
      if (this.state.input === '') {
        return (
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
        )
      } else {
        return (
          <div className="jetair-widget-citys-searchlist">
            <div>
              <ul>
                {this.state.searchList.map((searchItem, searchIteminx) => (
                  <li key={searchIteminx} onClick={() => this._chooseOne(searchItem)}>
                    {searchItem.airportName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      }
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
                <input
                  className="jt-cityHead-input"
                  placeholder={"北京 / beijing / bj / PKX"}
                  value={this.state.input}
                  onChange={this.inputChangeHandler} />
                <i className="jt-cityHead-search-icon" onClick={() => this.inputSearch()} ></i>
                <i className="jt-cityHead-searchClear-icon" onClick={() => this.clearInput()}>
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
              <div className="jetair-widget-citys-letnav" onTouchMove={this._touchLetters}>
                <ol>
                  <div>
                    <li onClick={() => this._chooseLetter('star', 'starCity')}>
                      <em className='star-small' data-type="starCity"></em>
                    </li>
                    {this.curCityData.map((item, inx) => (
                      <li key={inx} onClick={() => this._chooseLetter(item.letter, 'letter')}>
                        {item.letter}
                      </li>

                    ))}
                  </div>
                </ol >
              </div> :
              null
          }

          {/* 城市列表 */}
          <div className="jetair-widget-citys-content">
            <Scroll ref={this.tabselect}>
              <div className="airport-list-warp">
                <div className="jetair-widget-citys-list">
                  <dl>
                    {this.checkButton()}
                  </dl>
                </div>
              </div>

            </Scroll>
          </div>
        </div>
      </div >
    ) : null;
  }
}

export default AirportList;