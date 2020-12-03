
/**
 * view：视图层
 * actionCreator：动作创造者，视图层发出的消息
 * dispatcher：派发器，用来接收actions，执行回调函数
 * store：数据层，用来存放应用的状态，一旦发生变动，就提醒views要更新页面
 * Flux的流程：
 *            1.组件获取到store中保存的数据挂载在自己的状态上
 *            2.用户产生了操作，调用actions的方法
 *            3.actions接收到了用户的操作，进行一系列的逻辑代码，异步操作
 *            4.然后actions会创建出对应的action，action带有标识性的属性
 *            5.actions调用dispatcher的diapatch方法将action传递给dispatcher
 *            6.dispatcher接收到action并根据标识信息判断之后，调用store的更改数据的方法
 *            7.store的方法被调用后，更改状态，并触发自己的某一个事件
 *            8.store更改状态后事件被触发，该事件的处理程序会通知view去获取最新的数据
 */
import React, { Component } from 'react';
// import { dispatch } from './Store/store'
import  {  store } from './Store/store2'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {/* <button onClick={dispatch.bind(this,({type: 'decrement'}))}>减少</button>
                <h1>我是霞霞</h1>
                <span id="count">gaga</span>
                <button onClick={dispatch.bind(this,({type: 'increment'}))}>增加</button> */}

                 <button onClick={store.dispatch.bind(this,({type: 'decrement'}))}>减少</button>
                <span id="count">0</span>
                <button onClick={store.dispatch.bind(this,({type: 'increment'}))}>增加</button>
            </div>
         );
    }
}
 
export default App;