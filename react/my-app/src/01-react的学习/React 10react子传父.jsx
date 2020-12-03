// react的子传父数据传递
import React from "react";
import ReactDOM, { render } from "react-dom";
// react数据传递：调用父元素的函数从而操作父元素的数据，从而实现数据从子元素传递至父元素

// 子传父
class ParentCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childData: null,
    };
  }
  render() {
    console.log(this)
    return (
      <div>
        <h1>子元素传递给父元素的数据:{this.state.childData}</h1>
        <ChildCom setChildData={this.setChildData} />
      </div>
    );
  }
  // 设置一个函数用于修改childData的数据,通过传参的方式，然后将setChildData这个函数传递给子组件
  setChildData=(data)=> {
    this.setState({
      childData: data,
    });
  }
}

class ChildCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 将msg中的值helloword的值传出去，传给父元素
      msg: "helloword",
    };
    // 使用箭头函数的话就不用单独为sendData绑定this了，在sendData箭头函数中进行了绑定， 此语法确保 `sendData` 内的 `this` 已被绑定。
    // this.sendData = this.sendData.bind(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.sendData}>传递helloword给父元素</button>
      </div>
    );
  }
  // 点击事件的函数
  // 使用箭头函数的话就不用单独为sendData绑定this了，在sendData箭头函数中进行了绑定， 此语法确保 `sendData` 内的 `this` 已被绑定。
  sendData =()=> {
    console.log(this);
    console.log(this.state.msg);
    // 验证下是否子组件ChildCom中的props中是否有setChildData函数，
    console.log(this);
    // 调用setChildData函数，并将子组件的state中的msg的数据helloword传递给父组件，实际就是调用父组件传递进来的函数
    this.props.setChildData(this.state.msg);
  }
}

ReactDOM.render(<ParentCom />, document.getElementById("root"));
