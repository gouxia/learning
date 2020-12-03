// react的父传子数据传递
import React from "react";
import ReactDOM from "react-dom";
import "./Tab.css";
// props：父传给子组件数据，单向流动，不能子传递给父；props的传值可以是任意的数据类型;props可以设置默认值；props传值，子组件是不能修改父组件传过来的值的，但是父组件可以修改
// 注意：props可以传递函数，props可以传递父元素的函数，就可以去修改父元素的state，从而达到传递数据给父元素

// 在父元素中使用state去控制子元素的props，从而达到父元素数据传递给子元素

class ParentCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    // 要为changeShow绑定isActive的值， 为了在回调中使用 `this`，这个绑定是必不可少的
    // class 的方法默认不会绑定 this。如果你忘记绑定 this.changeShow 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。
    this.changeShow = this.changeShow.bind(this);
  }
  render() {
    console.log(this)
    return (
      <div>
        <button onClick={this.changeShow}>控制子元素显示</button>
        {/* <ChildCom isActive={this.state.isActive}/> 这句代码的含义就是通过props将isActive的值从父元素传递给了子元素 */}
        <ChildCom isActive={this.state.isActive} />
      </div>
    );
  }
  changeShow() {
    // 改变isActive的值
    this.setState({
      isActive: !this.state.isActive,
    });
  }
}
class ChildCom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let strClass = null;
    console.log(this)
    if (this.props.isActive) {
      strClass = " active";
    } else {
      strClass = "";
    }
    return (
      <div className={"content" + strClass}>
        <h1>我是子元素</h1>
      </div>
    );
  }
}

ReactDOM.render(<ParentCom />, document.getElementById("root"));
