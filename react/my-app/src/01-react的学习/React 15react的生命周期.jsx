// react的生命周期
import React from "react";
import ReactDOM, { render } from "react-dom";
// 生命周期既是组件从实例化到渲染到最终从页面中销毁，整个过程就是生命周期，在这个生命周期中，我们有许多可以调用的事件，也俗称为钩子函数
// 生命周期的3个状态：
//                   Mounting将组件插入到DOM中
//                   Updating将数据更新到DOM中
//                   Unmounting将组件移除DOM中
// 生命周期中的钩子函数，也可称为方法或者事件
//                   compontWillMount：组件将要渲染
//                   compontDidMount：组件渲染完毕,componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用,可以在 componentDidMount() 里直接调用 setState()
//                   compontWillReceiveProps：组件接收到新的state或者props，判断是否更新，返回布尔值
//                   ShouldCompontUpdate：如果希望更新就返回为真，不希望更新就返回为false
//                   CompontWillUpdate：组件将要更新
//                   componentDidUpdate：组件已经更新,componentDidUpdate() 会在更新后会被立即调用
//                   CompontWillUnmount：组件将要卸载,componentWillUnmount() 会在组件卸载及销毁之前直接调用

class ParentCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  render() {
    if (this.state.isShow) {
      return (
        <div>
          <button onClick={this.removeCom}>移除子组件</button>
          <ComLife></ComLife>
        </div>
      );
    } else {
      return (
        <div>
          <h3>将comlife已移除</h3>
        </div>
      );
    }
  }
  removeCom = () => {
    this.setState({
        isShow: false,
      });
  };
}

class ComLife extends React.Component {
  constructor(props) {
    super(props); //调用继承Component的构造函数
    this.state = {
      msg: "hello worlds",
    };
    console.log("我是构造函数");
  }
  compontWillMount() {
    console.log("CompontWillMount组件将要渲染");
  }
  compontDidMount() {
    console.log("CompontDidMount组件渲染完毕");
  }
  compontWillReceiveProps() {
    console.log("CompontWillReceiveProps组件将要接受新的state和props数据");
  }
  compontWillUpdate() {
    console.log("CompontWillUpdate组件将要更新");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate组件已经更新");
  }
  compontWillUnmount() {
    console.log("CompontWillUnmount组件将要卸载");
  }
  render() {
    console.log("render函数");
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeMsg}>组件更新 </button>
      </div>
    );
  }
  changeMsg = () => {
    this.setState({
      msg: " 王霞",
    });
  };
}
ReactDOM.render(<ParentCom />, document.getElementById("root"));
