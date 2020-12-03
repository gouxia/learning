// Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
// 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，
// 但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。
// Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。
import React, { Component } from 'react';
// 导入上下文对象
import {Consumer,Provider,testContext} from './testContext'
// 跨组件通信：在react中没有类似vue中的时间总线来解决这个问题，我们只能借助他们共同的父组件来实现，将非父子关系装换成多维度的父子关系，react
// 提供了context api来实现跨组件通信
// 实现功能：ChildA和ChildD传参数,
// 思路：可以把状态都挂载到根节点上，也就是组件Context上，这样所有的子节点都可以访问到状态
export default class Context extends Component {
    render() {
        return (
            <Provider value="hello">
                <ChildA></ChildA>
                <ChildB></ChildB>
            </Provider>
        )
    }
}
// 类组件:使用根组件传过来的参数的方式要用到testContext和contextType
class ChildA extends Component {
    // 通过下面的一行代码组件ChildA继承了父组件Context中的value值"hello",在控制台可以看到组件ChildA中有个context属性，属性值为"hello"
    static contextType = testContext
    render() {
        console.log(this)
        return (
            <div>
                <h2>ChildA</h2>
                {/* 读取父组件传过来的值 */}
                <span>我是父组件传过来的值：{this.context}</span>
            </div>
        )
    }
}
class ChildB extends Component {
    static contextType = testContext
    render() {
        console.log(this)
        return (
            <div>
                <h2>ChildB</h2>
                <ChildC></ChildC>
            </div>
        )
    }
}
class ChildC extends Component {
    static contextType = testContext
    render() {
        console.log(this)
        return (
            <div>
                <h3>ChildC</h3>
                <ChildD></ChildD>
            </div>
        )
    }
}
// 函数式组件:使用根组件传过来的参数的方式要用到Consumer
const ChildD = function(props) {

        return (
            <div>
                <h4>ChildD</h4>
                <Consumer>
                {
                        (value) => {
                                     return(
                                             <div>
                                                   {value}
                                             </div>
                                            )
                                    }                    
                   }
                </Consumer>
            </div>
        )
}