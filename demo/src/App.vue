<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
        <ShopCart/> 
    </div>
  </div>
</template>

<script>
 import ShopCart from "./components/ShopCart";
 
export default {
  name: "App",
  components: {
     ShopCart
  },
  data() {
    return {};
  },
  props: {},
  // methods: {
  //   //购物车小球动画的方法,访问子组件用$refs
  //     _drop(target) {
  //       this.$refs.ShopCart.drop(target);
  //     }
  // },
  //购物车小球动画事件
  //  events: {
  //    'cart.add'(target) {
  //     this._drop(target);

  //   }
  //  }
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
  }
  .footer {
    // background: crimson;
    height: 50px;
  }
}
</style>
