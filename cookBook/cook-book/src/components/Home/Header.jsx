import React, { Component } from 'react';
import '../../assets/styles/Header.scss'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // React实现类似vue的具名插槽的使用方式
    render() {
        const {left,center,right} = this.props
        return (
            <div className="wd-header">
                <div className="wd-header-left-wrapper">
                    { left }
                </div>
                <div
                    className="jt-cityHead-input-warp">
                    { center }
                </div>
                <div className="wd-header-right-wrapper">
                    { right }
                </div>
            </div >

        );
    }
}

export default Header;