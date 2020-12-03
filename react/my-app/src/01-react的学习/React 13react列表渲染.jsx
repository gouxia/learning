// react的列表渲染
import React from "react";
import ReactDOM, { render } from "react-dom";

// 列表渲染：将列表的内容拼装成数组放在模板当中，将数据拼装成数组的jsx对象
// 使用数组的map方法，对每一项数据按照jsx的形式加工，最终得到1个每一项都是jsx对象的数组，再将数组渲染到模板中，key值需要放置到每一项当中
// map，对数组的每一项进行加工，加工完成之后返回1个新的数组
// foreach，对数组进行循环，相当于直接for循环，没有返回值
// array.forEach(element => {
  
// });


// 函数式组件
function ListItem(props) {
  // 控制台输出的props为map方法每次遍历的数组中的元素
  console.log(props);
  return (
    <li>
      <h3>{props.data.title}</h3>
      <p>{props.data.content}</p>
    </li>
  );
}

// 类组件
class ParentCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "第一节 react事件",
          content: "事件内容",
        },
        {
          title: "第二节 英语",
          content: "翻译",
        },
        {
          title: "第三节 高数",
          content: "函数",
        },
        {
          title: "第四节 数据库",
          content: "数据",
        },
      ],
    };
  }
  // 最原始的方式遍历数组中的元素
  // render() {
  //   let arrList = [];
  //   for (let i = 0; i < this.state.list.length; i++) {
  //     let item = (
  //       <li>
  //         <h3>{this.state.list[i].title}</h3>
  //         <p>{this.state.list[i].content}</p>
  //       </li>
  //     );
  //     arrList.push(item);
  //   }
  //   return (
  //     <div>
  //       <h1>今天的课程内容</h1>
  //       <ul>{arrList}</ul>
  //     </div>
  //   );
  // }

  // 使用数组的map方法，对每一项数据按照jsx的形式进行加工，最终得到1个每一项都是jsx对象的书序，再将数组渲染到模板中
  // 在li上添加key
  // render() {
  //   // 利用ES6的数组循环的方式map(),将每次循环的数组中的元素返回给listArr
  //   let listArr = this.state.list.map((item, index) => {
  //     return (
  //       <li key={index}>
  //         <h3>{item.title}</h3>
  //         <p>{item.content}</p>
  //       </li>
  //     );
  //   });
  //   return (
  //     <div>
  //       <div>
  //         <h1>今天的课程内容</h1>
  //         <ul>{listArr}</ul>
  //       </div>
  //     </div>
  //   );
  // }

  // 使用数组的map方法，对每一项数据按照jsx的形式进行加工，最终得到1个每一项都是jsx对象的书序，再将数组渲染到模板中
  // 提取出一个 ListItem 组件，应该把 key 保留在数组中的这个 <ListItem /> 元素上，而不是放在 ListItem 组件中的 <li> 元素上。
  render() {
    // 利用ES6的数组循环的方式map(),将每次循环的数组中的元素返回给listArr
    let listArr = this.state.list.map((item, index) => {
      // 控制台输出的item为map方法每次遍历的数组中的元素
      console.log(item);
      // return <ListItem key={index} data={item} index={index} />;
      return <ListItem2 key={index} data={item} index={index} />;
    });
    return (
      <div>
        <div>
          <h1>今天的课程内容</h1>
          <ul>{listArr}</ul>
        </div>
      </div>
    );
  }
}

class ListItem2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this)
    return (
      <div>
        <li onClick={(event)=>{this.clickEvent(this.props.index,this.props.data.title,event)}}>
          <h3>{this.props.data.title}</h3>
          <p>{this.props.data.content}</p>
        </li>
      </div>
    );
  }
  // 点击事件
  clickEvent = (index, title, event) => {
    alert(index + "-" + title);
  };
}
ReactDOM.render(<ParentCom />, document.getElementById("root"));
