import React, { Component } from 'react';
import '../../assets/styles/Card.scss'

class card extends Component {
    render() {
        return (
            <div className="cardWrap">
                <span className="circle circle-left">

                </span>
                <span className="circle circle-right">

                </span>
                {/* 
                在Vue中，假如我们需要让子组件的一部分内容，被父组件控制，而不是被子组件控制，那么我们会采用插槽的写法 <slot></slot>
                在 React 里也有类似的写法，父组件写法是相同的，但子组件是采用 {this.props.children} 来实现。
                 */}
                <div>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default card;