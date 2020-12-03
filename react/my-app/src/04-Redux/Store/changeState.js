let state = {
   count:0
}
const  changeState = (action) => {
   switch(action.type){
       case 'increment':
        state.count++
        break
      case 'decrement':
        state.count--
        break
        default:
   }
}
// 将状态和状态的修改方法暴露出去
export {
    state,
    changeState
}