import React, { Component } from 'react';
import '../assets/styles/QuickEnteryslide.scss'
import Card from '../components/Card'
import flightDynamic from '../assets/images/flightDynamic.png'
import car from '../assets/images/car.png'
import irregularflight from '../assets/images/irregularflight.png'
import meal from '../assets/images/meal.png'
import plus from '../assets/images/plus.png'
import blind from '../assets/images/blind.png'
import baggage from '../assets/images/baggage.png'
import chooseSeat from '../assets/images/chooseSeat.png'

class QuickEnteryslide extends Component {
    constructor(props) {
        super(props);
        this.state={
            images:[flightDynamic,chooseSeat, meal,baggage,blind,plus,car,irregularflight],
            names:['航班动态','选座值机','机上餐食','手提/托运行李','盲盒飞行家','PLUS会员','用车','不正常航班退改']
        }
    }
    render() {
        return (
            <div className="quickEntrySlide">
                {/* <!-- 快捷入口的指示器，因为放到快捷入口之后 getCurrentPage无法获取，只能提到前面--> */}
                <div className="dotWrap">
                    <span className="dotsHover dotsItem"></span>
                    <span className="dotsItem"></span>
                    <span className="dotsItem"></span>
                </div>
                {/* 八个入口 */}
                <div className="productList">
                    <Card>
                    <div className="quickEntryWrap">
                    <div className="quickEntryGroup">
                        <div className="productType">
                            <ul className="rowType">
                                <li className="product-li-info">
                                    <div className="img-wrapper">
                                        <img src={flightDynamic} />
                                    </div>
                                    <span className="wordClass">航班动态</span>
                                </li>
                                {/* <li className="product-li-info">
                                    <div className="img-wrapper">
                                        <img src={chooseSeat} />
                                    </div>
                                    <span className="wordClass">选座值机</span>
                                </li>
                                <li className="product-li-info">
                                    <div className="img-wrapper">
                                        <img src={meal} />
                                    </div>
                                    <span className="wordClass">机上餐食</span>
                                </li>
                                <li className="product-li-info">
                                    <div className="img-wrapper">
                                        <img src={baggage} />
                                    </div>
                                    <span className="wordClass">手提/托运行李</span>
                                </li>
                                <li className="product-li-info">
                                    <div className="img-wrapper">
                                        <img src={blind} />
                                    </div>
                                    <span className="wordClass">盲盒飞行家</span>
                                </li>
                                <li className="product-li-info">
                                    <div className="img-wrapper">
                                        <img src={plus} />
                                    </div>
                                    <span className="wordClass">PLUS会员</span>
                                </li>
                                <li className="product-li-info">
                                    <div className="img-wrapper">
                                        <img src={car} />
                                    </div>
                                    <span className="wordClass">用车</span>
                                </li>
                                <li className="product-li-info"> 
                                    <div className="img-wrapper">
                                        <img src={irregularflight} />
                                    </div>
                                    <span className="wordClass">不正常航班退改</span>
                                </li>*/}
                            </ul>
                        </div>
                    </div>
                </div> 
                    </Card>
                </div>
        </div>
        );
    }
}

export default QuickEnteryslide;