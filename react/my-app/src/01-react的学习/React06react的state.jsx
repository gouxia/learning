// react的状态，使用定时器调用render
import React from "react";
import ReactDOM from "react-dom";
// react中的state相当于Vue中的data，但是使用方式和Vue中的不一致
// 利用state封装需要的数据，就不需要把数据在使用组件时传进来了，先把数据存进state中，然后用数据的时候取就可以了
// 类组件
class Clock extends React.Component {
  // 构造函数不会在定时器中反复调用，因为他会认为这是同一个函数所以就调用一次，渲染出来的时间是不会变得，但是render是被反复调用的，所以要想显示出来的时间一直在变化就要将state中的date等于render中反复被调用的date
  // constructor是一种用于创建和初始化clock类创建的对象实例的特殊方法
  constructor(props) {
    // super是调用父类构造函数,参数就是传到父类构造函数的参数
    super(props);
    // 为Clock类组件中的state传值，将要用的值传进来，等要用到这些值的时候再存就行啦
    //只能在构造函数中直接为 this.state 赋值。如需在其他方法中赋值，你应使用 this.setState() 替代。
    this.state = {
      name: "王霞",
      age: "18",
      gender: "女",
      time: new Date().toLocaleTimeString()
    };
    console.log(this.state.time);
  }
  render() {
    // 此时发现Clock类组件中的state有值
    console.log(this);
    // 构造函数不会在定时器中反复调用，因为他会认为这是同一个函数所以就调用一次，渲染出来的时间是不会变得，但是渲染函数render是被反复调用的，所以要想显示出来的时间一直在变化就要将state中的time等于render中反复被调用的时的时间
    this.state.time = new Date().toLocaleTimeString();
    return (
      <div>
        <h1>{this.state.name}喜欢吃芒果</h1>
        <h2>现在的时间{this.state.time}</h2>
      </div>
    );
  }
}


// ReactDOM.render(<Clock />, document.getElementById("root"));

// 定义一个tick函数，将ReactDOM.render放在其中，利用定时器调用这个函数，但是不推荐使用定时器反复调用render函数，推荐使用像vue中的生命周期的函数
function tick(){
  ReactDOM.render(
    <Clock />,
     document.getElementById("root")
   );
}
setInterval(tick,1000)
