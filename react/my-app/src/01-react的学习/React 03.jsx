// 这个是核心文件
import React from "react";
import ReactDOM from "react-dom";
// let name = "娃哈哈";
// let love = "是我的最爱";
// let element = <h2>{name + love}</h2>;



let element3 = (
  <div>
    <span>横着躺</span>
    <span>竖着躺</span>
  </div>
);


let man = "正常";
let element2 = (
  <div>
    <h1>今天是否需要隔离</h1>
    <h2>{man === "发热" ? "隔离" : element3}</h2>
  </div>
);
ReactDOM.render(element2, document.getElementById("root"));
