import React, { Component } from 'react';
import '../assets/styles/HomeBanner.scss';
import { Carousel } from 'element-react';
import 'element-theme-default';
import banner01 from '../assets/images/mbanner01.jpg'
import banner02 from '../assets/images/mbanner02.jpg'
import banner03 from '../assets/images/mbanner03.jpg'
class HomeBanner extends Component {
    constructor(props) {
        super(props);
        this.state={
            images:[banner01,banner02, banner03]
        }
    }
    render() {
        return (
            // <div className="bannerWrap">
            <div className="demo-1 small">
                <div className="block">
                    <span className="demonstration"></span>
                    <Carousel height="150px">
                        {
                            this.state.images.map((item, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <img height="100%" width="100%" src={item} alt='' />
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
            // {/* </div> */}
        );
    }
}

export default HomeBanner;