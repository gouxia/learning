// 对Store进行封装
import { state, changeState} from './changeState';

const createStore = () => {
    const render = (state) => {
        document.querySelector("#count").innerHTML = state.count
   }
    const dispatch = (action) => {
        changeState(action)
        render(state)
   }
   return {
    dispatch
   }
}
// 调用createStore的方法
const store = createStore()

export {
    store
}