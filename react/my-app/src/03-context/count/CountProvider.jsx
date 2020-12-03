import React, { Component,createContext } from 'react';
// 解构出Provider和Consumer,起别名的方式为Consumer:CountConsumer，此时Consumer新的名字为CountConsumer
const {
    Provider,
    Consumer:CountConsumer
} = createContext()
class CountProvider extends Component {
    constructor(props){
           super(props)
           this.increment = this.increment.bind(this)
           this.decrement = this.decrement.bind(this)
    }
    // 将类的状态变成共享的数据
    state = {
        count: 0
    }
    increment(i) {
       this.setState(state => ({
           count: state.count + i
       }))
    }
    decrement(j) {
        this.setState(state => ({
            count: state.count - j
        }))
    }
    render() {
        return(
            <Provider value={{
                count: this.state.count,
                increment: this.increment,
                decrement: this.decrement
            }}>
                {this.props.children}

            </Provider>
        )

    }
}
// 导出了一个CountProvider的类组件，一个CountConsumer
export {
    CountConsumer,
    CountProvider
}