// react的组件
import React from "react";
import ReactDOM from "react-dom";
// 组件由两种形式：函数式组件和类组件，不管是函数式组件还是类组件都有一个参数props，这个参数可传可不传，看自己的需要
// 类组件本身就含有props属性，只是props属性有没有值是根据使用组件时传不传值决定的；而函数式组件中本身不含有props属性，给他传才有，不传就没有
// 函数式组件与类组件的区别：
//1. 如果有点击事件或者什么处罚事件，动态事件的话或者动态修改数据的就用类组件，类组件又称为动态组件
// 2.如果内容定死或者利用props传一些参数的，也就是用于静态没有交互内容的组件页面，就用函数式组件，函数式组件又称为静态组件
// 组件中又包含组建的称为复合组件，复合组件中既可以有类组件又可以有函数组件

// 以下是函数式组件和类组件不传参数props的例子
// 函数式组件
// function Childcom(){
//   let title = <h2>我是副标题</h2>
//   // 利用三元表达式判断是否出门，也可以利用if语句进行判断
//   let weather = "下雨"
//   let isGo = weather ? "不出门" : "出门"
//   //return中返回的是视图部分
//   return (
//     <div>
//       <h1>我是函数式组件，组件名首字母必须要大写</h1>
//       {title}
//       <div>
//         <span>是否出门？</span>
//         {isGo}
//       </div>
//     </div>
//   )
// }

// // 类组件
// class HelloWorld extends React.Component {
//   // render进行渲染
//   render() {
//     return (
//       <div>
//         <h1>类组件定义HelloWorld</h1>
//       </div>
//     )
//   }

// }

//以下是函数式组件和类组件传参数props的例子
// 函数式组件
function Childcom(props) {
  // 此时输出的props中含有weather: "下雨"，证明值已经传进来了
  console.log(props);
  // 利用三元表达式判断是否出门，也可以利用if语句进行判断，props.weather中weather的值在使用组件时传入
  let weather = props.weather
  let isGo = weather === '下雨' ? "不出门" : "出门";
  //return中返回的是视图部分
  return (
    <div>
      <h1>我是函数式组件，组件名首字母必须要大写</h1>
      <div>
        <span>是否出门？</span>
        {isGo}
      </div>
    </div>
  );
}

// 类组件
class HelloWorld extends React.Component {
  // render进行渲染
  render() {
    // this指的是HelloWorld这个组件
    console.log(this);
    // 此时发现name与weather的值已经传进来了
    console.log(this.props);
    return (
      <div>
        <h1>类组件定义HelloWorld</h1>
        <h2>hello:{this.props.name}</h2>
        {/* 将Childcom组件放到HelloWorld组件中，再将HelloWorld组件放到ReactDOM.render中进行渲染 */}
        <Childcom weather={this.props.weather} />
      </div>
    );
  }
}

// ReactDOM.render中只能放一个组件，但是ReactDOM.render中的组件中可以放其他组件，也就是组件套组件，套娃，组件HelloWorld中可以放组件Childcom
ReactDOM.render(
  // 使用组件
  <HelloWorld weather="出太阳" name="王霞" />,
  document.getElementById("root")
);
