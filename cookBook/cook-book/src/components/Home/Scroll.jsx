import React, { Component } from 'react';
import '../../assets/styles/Scroll.scss'
import BScroll from 'better-scroll'

const defProps = {
  probeType: 1,
  scrollbar: false,
  click: true,
  scrollX: false,
  scrollY: true,
  listenScroll: false,
  data: null,
  pullup: false,
  pulldown: false,
  beforeScroll: false,
  refreshDelay: 20,
  pullupDistance: 50,
  stopPropagation: false,
  hasMore: true,
  loadingText: '努力加载中...',
  pullDownText: '下拉刷新',
  pullUpText: '上拉加载更多',
  noMoreText: '没有更多了',
  inputClassName: ''
};

const defState = {
  pullDownStyle: { top: '-50px' },
  pullUpStyle: { top: '0px' },
  // 是否处于上拉请求状态
  isPullupLoading: false,
  /**
   * 下拉加载状态
   * HIDDEN: 隐藏
   * DOWN: "下拉加载"文字提示
   * RELEASE: "释放刷新"文字提示
   * LOADING: 显示 loading 动画
   * SUCCESS: "刷新成功"文字提示
   */
  pulldownStatus: 'SUCCESS'
};

class Scroll extends Component {
  constructor(props) {
    super(props);
    /** scroll 实例 */
    this.scroll = null;
    this.wrapper = React.createRef();
    this.state = defState;
    this.initScroll = this.initScroll.bind(this);
  }
  static defaultProps = defProps;

  componentDidMount() {
    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this.initScroll();
    }, 20);
  }

  componentDidUpdate(prvProps) {
    if (JSON.stringify(prvProps.data) !== JSON.stringify(this.props.data)) {
      if (this.scroll) {
        this.scroll.refresh();
      }
    }
  }

  /** 初始化 scroll 方法 */
  initScroll() {
    const {
      probeType,
      click,
      scrollX,
      scrollY,
      pulldown,
      pullupDistance,
      pullup,
      scrollbar,
      stopPropagation
    } = this.props;

    console.log('scrollX', scrollX);
    this.scroll = new BScroll(this.wrapper.current, {
      probeType,
      click,
      scrollX,
      scrollY,
      stopPropagation,
      // pc端同样能滑动
      mouseWheel: {
        speed: 20,
        invert: false
      },
      // 防止iphone微信滑动卡顿
      useTransition: false,
      // 是否开启下拉刷新
      pullDownRefresh: pulldown && {
        threshold: pullupDistance,
        stop: pullupDistance
      },
      // 是否开启上拉加载
      pullUpLoad: pullup && {
        threshold: -pullupDistance
      },
      //是否显示滚动条
      scrollbar
    });
  }
  // 代理better-scroll的scrollTo方法
  scrollTo () {
    this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
  }
  // 代理better-scroll的scrollToElement方法
  scrollToElement () {
    this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
  }
  /** 下拉信息 */
  get pulldownText() {
    const { pulldownStatus } = this.state;
    const { loadingText } = this.props;
    const statusEnum = {
      DOWN: '下拉加载',
      RELEASE: '释放刷新',
      LOADING: loadingText,
      SUCCESS: '加载成功'
    };

    return statusEnum[pulldownStatus];
  }

  render() {
    const {
      pulldown,
      pullup,
      scrollX,
      loadingText,
      hasMore,
      pullUpText,
      noMoreText
    } = this.props;
    const {
      pullUpStyle,
      isPullupLoading,
      pulldownStatus,
      pullDownStyle
    } = this.state;
    const { pulldownText } = this;

    return (
      <div ref={this.wrapper} className="scroll">
        <div
          className={`content-wrapper ${pulldown && 'content-wrapper-full'} ${scrollX && 'content-wrapper-scrollX'
            }`}
        >
          {/* 上拉加载更多提示 */}
          {pullup && (
            <div className="pullup-wrapper" style={pullUpStyle}>
              {pulldownStatus === 'HIDDEN' && (
                <div>
                  {isPullupLoading
                    ? loadingText
                    : hasMore
                      ? pullUpText
                      : noMoreText}
                </div>
              )}
            </div>
          )}

          {/* 数据列表 */}
          {this.props.children}

          {/* 下拉刷新提示 */}
          {pulldown && (
            <div className="pulldown-wrapper" style={pullDownStyle}>
              {pulldownText}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Scroll;
