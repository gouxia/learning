// react的样式和注释
import React from "react";
import ReactDOM from "react-dom";
import  "./04style.css";

// let exampleStyle = {
//   background: "skyblue",
//   borderBottom: "5px solid red"
// }
// let element = (
//   <div>
//     {/* 这里写注释 style样式中，如果存在多个单词的属性组合，第二个单词开始，首字母大写，或者用引号引起来，否则报错 */}
//     <h1 style={exampleStyle}>娃哈哈</h1>
//   </div>
// )


// let classStr = "redBg"
// let element2 = (
//   <div>
//     {/* 这里写注释 class，style中，不可以存在多个class，style属性
//     <div class='abc' class={'active'}></div>这样写是错误的写法
//      */}
//      {/* 以下写法为多个类共存的操作 */}
//     <h1 className={"abc "+classStr}>helloword</h1>
//   </div>
// )


// 在Vue中的写法 ,join(" ")是将类名abc2和redBg2进行拆分，以空格代替两者之间的逗号
let classStr2 = ['abc2','redBg2'].join(" ")
let element3 = (
  <div>
    <h1 className={classStr2}>helloword</h1>
  </div>
)
ReactDOM.render(element3, document.getElementById("root"));
