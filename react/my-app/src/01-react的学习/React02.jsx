// 这个是核心文件
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// 导入APP组件，然后在root中进行渲染这个组件就可以了
import App from "../App";
import reportWebVitals from "../reportWebVitals";
// 通过react渲染id为root的页面，在下面渲染App组件的页面，相当于将JS的普通对象<App />渲染到id为root上
//  <App /> JS普通对象，ReactDOM.render相当于调用ReactDOM对象的render方法，ReactDOM.render(参数一,参数二)，参数一为组件对象，参数二位要渲染的元素对象
// 第一种渲染方式
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 第二种渲染方式
// 创建实现页面时刻显示的函数
// function clock() {
//   let time = new Date().toDateString();
//   let element = (
//     <div>
//       <h1>现在的时间是：{time}</h1>
//       <h3>我是副标题</h3>
//     </div>
//   );
//   let root = document.getElementById("root");
//   ReactDOM.render(element, root);
// }
// // 调用时刻显示的函数
// clock();

// 第三种渲染方式,react函数式组件,组件的名称首字母必须大写
// function Clock(props) {
//   return (
//     <div>
//       <h1>现在的时间是：{props.date.toDateString()}</h1>
//       <h3>我是副标题</h3>
//     </div>
//   );
// }
// // 使用clock组件
// function run() {
//   ReactDOM.render(
//     <Clock date={new Date()} />, 
//     document.getElementById("root")
//     );
// }
// // 调用run函数
// run();








// reportWebVitals()可以注释掉，非必须需要的
reportWebVitals();
