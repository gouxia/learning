import React, { Component } from 'react';
import Child1 from './Child1'
import Child2 from './Child2'
// 父传子通过在父元素中使用state去控制子元素的props，从而达到父元素数据传递给子元素
// 子传父通过调用父元素的函数从而操作父元素的数据，从而实现数据从子元素传递至父元素
// 兄弟组件之间通信利用状态提升
class Parent extends Component {
    constructor(props) {
        super(props)
        this.state={
            data:''
        }
    }
    // 子组件向父组件中传参数的方法，
    handReceiveData=(data) => {
        this.setState({
            data
        })
    }
    render() {
        return (
            <div>
                <Child1 onReceiveData={this.handReceiveData.bind(this)}></Child1>
                <Child2 data={this.state.data}></Child2>
            </div>
        )
    }
}
export default Parent