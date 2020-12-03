// react的状态，切换例子
import React from "react";
import ReactDOM from "react-dom";
import "./Tab.css";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    // 设置状态，数据
    this.state = {
      c1: "content active",
      c2: "content",
    };
    // 为点击事件clickEvent绑定下state中的初始数据，这样在点击button按钮时，调用clickEvent方法时，才能获取到构造函数中的state的初始数据，并在clickEvent方法中通过setState()修改数据
    // class 的方法默认不会绑定 this。如果你忘记绑定 this.clickEvent 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。
    this.clickEvent = this.clickEvent.bind(this)
  }
  // 创建点击事件,在button按钮中利用onClick来调用这个clickEvent方法
  clickEvent(e) {
    console.log("nihao");
    console.log(e);
    // e.target.dataset.index 可以获取点击按钮时的为按钮绑定的data-index的属性值,target事件就是会自动判断我们点的是哪个元素，target 事件属性可返回事件的目标节点（触发该事件的节点）
    console.log(e.target.dataset.index);
    let index = e.target.dataset.index;
    // 此时控制台能输出点击按钮获取到的类Tab
    console.log(this);
    // 判断index
    if (index === "1") {
      // 通过setState()修改state的值
      this.setState({
        c1: "content active",
        c2: "content",
      });
    } else {
      this.setState({
        c1: "content",
        c2: "content active",
      });
    }
  }
  render() {
    return (
      <div>
        <button data-index="1" onClick={this.clickEvent}>
          内容一
        </button>
        <button data-index="2" onClick={this.clickEvent}>
          内容二
        </button>
        <div className={this.state.c1}>
          <h1>内容1</h1>
        </div>
        <div className={this.state.c2}>
          <h1>内容2</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Tab />, document.getElementById("root"));
