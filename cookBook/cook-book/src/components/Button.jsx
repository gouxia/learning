import React, { Component } from 'react';
import '../assets/styles/Button.scss'
class Button extends Component {

    render() {
        return (
            <div>
                <button className="homeQueryBtn">
                    <label className="wd-button-text">
                        <span className="resetFontSize">搜 索</span>
                    </label>
                </button>
            </div>
        );
    }
}

export default Button;