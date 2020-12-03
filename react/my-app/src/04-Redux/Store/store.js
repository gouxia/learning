// 定义初始状态值
const defaultState = {
    count: 0
}
// 修改状态值
const changeState = (action) => {
    // 当type为空时，默认switch走default那一步，如果不为空就走case
    action = action || {type: ''}
    switch(action.type) {
        case 'increment':
           defaultState.count++
           break
        case 'decrement':
           defaultState.count--
           break
         default:  

    }
}
// dom操作
const renderDom = () => {
    let countEle = document.querySelector("#count")
    countEle.innerHTML = defaultState.count
}
const dispatch = (action) => {
    // 调用changeState方法
    changeState(action)
    // 触发renderDom方法
    renderDom()
}
export {
    // 暴露dispatch这个方法
    dispatch
}