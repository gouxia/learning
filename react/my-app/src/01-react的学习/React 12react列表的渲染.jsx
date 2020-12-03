// react的条件渲染
import React from "react";
import ReactDOM, { render } from "react-dom";

// react中条件渲染和js中，条件运算，如if...else...，三元运算符等
// 1.直接通过条件运算返回要渲染的jsx对象
// 2.通过条件运算得出jsx对象，再将jsx对象渲染到模板中
// 3.通过三元运算符

// 函数式组件一
function UserGreet(props) {
  return <h1>欢迎登陆</h1>;
}
// 函数式组件二
function UserLogin(props) {
  return <h1>请先登录</h1>;
}
// 类组件
class ParentCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  // 1.直接通过条件运算返回要渲染的jsx对象
  // render() {
  //   if (this.state.isLogin) {
  //     return (
  //       <div>
  //         <UserGreet />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <UserLogin />
  //       </div>
  //     );
  //   }
  // }

  // 2.通过条件运算得出jsx对象，再将jsx对象渲染到模板中
  // render() {
  //   let element = null;
  //   if(this.state.isLogin) {
  //     element = <UserGreet />
  //   }else{
  //     element = <UserLogin />
  //   }
  //   return(
  //     <div>
  //          <h1>{element}</h1>
  //     </div>
  //   )
  // }
  

  // 3.通过三元运算符
  render() {
    let element = null;
    return (
      <div>
        <h2>三元运算符操作</h2>
        <h3>{this.state.isLogin ? <UserGreet /> : <UserLogin />}</h3>
      </div>
    );
  }
}

ReactDOM.render(<ParentCom />, document.getElementById("root"));
