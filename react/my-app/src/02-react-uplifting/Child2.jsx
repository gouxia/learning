import React, { Component } from 'react';
// 兄弟之间的通信
export default(props) => {
    return (
        // 通过点击<h1></h1>中的文字，接收父组件中的子组件Child1传过来的参数
        <div>
            <h1>{props.data}</h1>
        </div>
    )
} 
