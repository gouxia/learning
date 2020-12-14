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
        this.state = {
            objArr:[
                {
                    image: flightDynamic,
                    name: '航班动态'
                },
                {
                    image: chooseSeat,
                    name: '选座值机'
                },
                {
                    image: meal,
                    name: '机上餐食'
                },
                {
                    image: baggage,
                    name: '手提/托运行李'
                },
                {
                    image: blind,
                    name: '盲盒飞行家'
                },
                {
                    image: plus,
                    name: 'PLUS会员'
                },
                {
                    image: car,
                    name: '用车'
                },
                {
                    image: irregularflight,
                    name: '不正常航班退改'
                }
            ]
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
                                        {
                                            this.state.objArr.map((item, index) => (
                                                <li className="product-li-info" key={index}>
                                                    <div className="img-wrapper">
                                                        <img src={item.image} />
                                                    </div>
                                                    <span className="wordClass">{item.name}</span>
                                                </li>
                                            ))
                                        }

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