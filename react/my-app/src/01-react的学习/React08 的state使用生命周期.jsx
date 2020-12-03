// react的状态，使用生命周期函数调用render
import React from "react";
import ReactDOM from "react-dom";
// react中的state相当于Vue中的data，但是使用方式和Vue中的不一致
// 利用state封装需要的数据，就不需要把数据在使用组件时传进来了，先把数据存进state中，然后用数据的时候取就可以了
// 类组件
class Clock extends React.Component {
  // 构造函数不会在定时器中反复调用，因为他会认为这是同一个函数所以就调用一次，渲染出来的时间是不会变得，但是render是被反复调用的，所以要想显示出来的时间一直在变化就要将state中的date等于render中反复被调用的date
  constructor(props) {
    super(props);
    // 为Clock类组件中的state传值，将要用的值传进来，等要用到这些值的时候再取就行啦
    // 构造函数初始化数据，将需要改变的的数据初始化到state中，修改构造函数中初始化的数据就要调用setState()
    this.state = {
      name: "王霞",
      age: "18",
      gender: "女",
      time: new Date().toLocaleTimeString(),
    };
    console.log(this.state.time);
  }
  render() {
    this.state.time = new Date().toLocaleTimeString();
    return (
      <div>
        <h1>{this.state.name}喜欢吃芒果</h1>
        <h2>现在的时间{this.state.time}</h2>
      </div>
    );
  }

  // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器
  // 使用生命周期函数,这种方式也是错误的方式去更新页面的实时时间，要用setState()去更新页面的实时时间
  // componentDidMount() {
  //   setInterval(() => {
  // 这个输出的时间是从构造函数中获取的时间，一直是最初的时间，不会试试更新时间
  //     console.log(this);
  //     // this.state.time = new Date().toLocaleTimeString(); //错误的方式去更新页面的实时时间，要用setState()去更新页面的实时时间
  //     // 在生命周期函数中要调用ReactDOM.render，这样渲染出来的时间才会变化
  //     // ReactDOM.render(
  //     // <Clock />,
  //     // document.getElementById("root")
  //     // )
  //   }, 1000);
  // }



  // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器
  // 使用生命周期函数，这种方式才是正确的方式，用setState()去更新页面的实时时间
  componentDidMount() {
    setInterval(() => {
      // 这个输出的时间是经过setState()之后获取的时间，一直在更新时间
      console.log(this.state.time);
      // 使用 this.setState() 来时刻更新组件的 state中的数据，切勿直接修改state数据，直接修改state数据不会重新渲染内容，通过setState()才能重新渲染内容
      // 通过this.setState()修改完数据后，并不会立即修改视图（DOM)里面的内容，react会在这个函数内部所以设置状态改变后，统一对比虚拟DOM对象，然后再统一修改，提示性能
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
}
ReactDOM.render(<Clock />, document.getElementById("root"));
