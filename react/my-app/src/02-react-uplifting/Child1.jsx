import React, { Component } from 'react';
// 兄弟之间的通信
export default(props) => {
    return (
        // 通过点击<h1></h1>中的文字，向父组件中的子组件Child2传递参数
        <div onClick={props.onReceiveData.bind(this,'hello')}>
            <h1>Child1</h1>
        </div>
    )
} 
