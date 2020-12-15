import React, { Component } from 'react';
import '../../assets/styles/QuickEnteryslide.scss'
import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Card from '../../components/Home/Card'
class QuickEnteryslide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                [
                    {
                        image: "http://info.flycua.com/cuacms/upimg/flightDynamic_1575358162909.png",
                        name: '航班动态'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/chooseSeat_1575358115513.png",
                        name: '选座值机'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/meal_1575358275966.png",
                        name: '机上餐食'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/baggage_1575358062144.png",
                        name: '手提/托运行李'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/blind_1598848793158.png",
                        name: '盲盒飞行家'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/PLUS会员_1604466707914.png",
                        name: 'PLUS会员'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/car_1575358087216.png",
                        name: '用车'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/irregularflight_1575358255539.png",
                        name: '不正常航班退改'
                    }
                ],
                [
                    {
                        image: "http://info.flycua.com/cuacms/upimg/annualTicket_1575358030919.png",
                        name: '游你飞'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/hotel_1575358207953.png",
                        name: '酒店'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/ticketValidation_1575358912728.png",
                        name: '客票验真'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/freeTravel_1575358185572.png",
                        name: '自由行'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/hotelFlight_1575358232141.png",
                        name: '机加油'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/flightDelay_1575358138486.png",
                        name: '延误/取消证明'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/spots_1575358296503.png",
                        name: '门票'
                    },
                    {
                        image: "http://info.flycua.com/cuacms/upimg/88HealthDeclare_1582541612974.png",
                        name: '个人健康申明'
                    }
                ],
                [
                    {
                        image: "http://info.flycua.com/cuacms/upimg/团队行李132@3x_1606263744286.png",
                        name: '团队行李'
                    }
                ]
            ]
        }
    }
    render() {
        return (
            <WingBlank>
                <Carousel>
                    {this.state.images.map((value, index) => (
                        <div className="quickEntrySlide" key={index}>
                            {/* 八个入口 */}
                            <div className="productList">
                                <Card>
                                    <div className="quickEntryWrap">
                                        <div className="quickEntryGroup">
                                            <div className="productType">
                                                <ul className="rowType">
                                                    {
                                                        value.map((item, index) => (
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
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default QuickEnteryslide;