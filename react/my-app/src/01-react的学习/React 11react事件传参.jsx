// react的事件详解：传参
import React from "react";
import ReactDOM, { render } from "react-dom";

// react事件的传参
// 特点：react事件，绑定事件的命名，驼峰式命名法。  {}传入一个函数，而不是字符串
// 注意：原生中，阻止默认行为时，可以直接返回return false
//      react中，阻止默认必须e.preventDefault()

// react
class ParentCom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* form表单都会有默认的属性action，点击按钮就会有跳转页面的行为，如果想要阻止默认跳转页面的行为就要在点击事件parentEvent()上进行处理 */}
        <form action="http://www.baidu.com">
          <div className="child">
            <h1>helloword</h1>
            <button onClick={this.parentEvent}>提交</button>
          </div>
        </form>
        {/* 使用ES6箭头函数传递一个参数的方式，就不需要绑定this */}
        {/* 想要给parentEvent2函数传参要用下面方法,当你点击按钮时先调用箭头函数，然后箭头函数再去调用传递进去的内容msg:123 */}
        <button onClick={(e)=>{this.parentEvent2('msg:123')}}>提交2</button>
        {/* 不使用ES6箭头函数传递多个参数的方式时需要绑定this，也可以使用ES6箭头函数传递多个参数的方式就不需要绑定this */}
        <button onClick={function(e){this.parentEvent3('msg:123',e)}.bind(this)}>提交3</button>
      </div>
    );
  }
  parentEvent = (e) => {
    console.log(e.preventDefault);
    // e.preventDefault()阻止form表单的默认跳转行为
    e.preventDefault()
  };
  // 传递一个参数
  parentEvent2 = (msg) => {
    console.log(msg);
  };
  // 传递多个参数
  // 第一个参数是形参，传入的内容；第二个参数是传入的事件
  parentEvent3 = (msg,e) => {
    console.log(msg);
    console.log(e)
    // e.preventDefault()阻止form表单的默认跳转行为
   
  };
}

ReactDOM.render(<ParentCom />, document.getElementById("root"));
