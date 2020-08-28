import Vue from "vue";
import Vuex from "vuex";

//1.安装插件
Vue.use(Vuex);
//2.创建对象
const store = new Vuex.Store({
  //保存共享状态
  state: {
    /** 要查看的食品详情 ,判断食品详情是否存在*/
    goodDetail: null,
    /** 存储的购物车数据 */
    selectedgood: [],
  },
  mutations: {
    //方法，如果修改状态，都是通过mutations修改,状态更新
    //在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：
    //
    saveGoodDetail(state, payload) {
      state.goodDetail = payload.goodDetail;
    },
    changeselectedGood(state, payload) {
      const { type, goodinfo } = payload;
      let curSelectedgood = [...state.selectedgood];
      const { name } = goodinfo;
      // 已选择的商品索引
      const curIndex = curSelectedgood.findIndex((item) => item.name === name);
      if (curIndex > -1) {
        let curgood = curSelectedgood[curIndex];
        let goodnum = curgood.num;
        if (type === "add") {
          goodnum++;
          curSelectedgood[curIndex] = {
            ...goodinfo,
            num: goodnum,
          };
        } else {
          goodnum--;
          //console.log("goodnum", goodnum);
          if (goodnum === 0) {
            curSelectedgood.splice(curIndex, 1);
          } else {
            curSelectedgood[curIndex] = {
              ...goodinfo,
              num: goodnum,
            };
          }
        }
      } else if (type === "add") {
        curSelectedgood.push({
          ...goodinfo,
          num: 1,
        });
      }
      state.selectedgood = curSelectedgood;
    },
  },
  actions: {},
  getters: {
    //类似组件中的计算属性
    getter_selectedgood: (state) => {
      return state.selectedgood;
    },
  },
  modules: {},
});
//3.导出store独享
export default store;
